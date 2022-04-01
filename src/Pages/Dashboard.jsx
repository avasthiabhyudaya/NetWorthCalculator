import React from 'react'
import NetWorthCard from '../Components/NetWorthCard'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(
    Tooltip, Title, ArcElement, Legend
);

function Dashboard() {

    const { totalNetWorth = 0, goldDataList, goldTimeStamp } = useSelector((state) => state.gold)
    const { traditionalNetWorth = 0, TraditionalDataList, traditionalTimeStamp } = useSelector((state) => state.traditional);
    const { realEstateNetWorth = 0, realEstateDataList, realEstateTimeStamp } = useSelector((state) => state.realestate);
    const { MFNetWorth = 0, MFDataList, MFTimeStamp } = useSelector((state) => state.mutualFunds);
    const { bondNetWorth = 0, bondDataList, bondTimeStamp } = useSelector((state) => state.bonds);
    const { cryptoNetWorth = 0, cryptoDataList, cryptoTimeStamp } = useSelector((state) => state.crypto);

    let totalAmount = totalNetWorth + traditionalNetWorth + realEstateNetWorth + MFNetWorth + bondNetWorth + cryptoNetWorth;


    let dashboardTimeStamp = goldTimeStamp > traditionalTimeStamp && goldTimeStamp > realEstateTimeStamp ? goldTimeStamp : traditionalTimeStamp > realEstateTimeStamp ? traditionalTimeStamp : realEstateTimeStamp

    let traditionalPercentage = ((traditionalNetWorth / totalAmount) * 100);
    let goldPercentage = ((totalNetWorth / totalAmount) * 100);
    let realEstatePercentage = ((realEstateNetWorth / totalAmount) * 100);
    let MFPercentage = ((MFNetWorth / totalAmount) * 100);
    let bondPercentage = ((bondNetWorth / totalAmount) * 100);
    let cryptoPercentage = ((cryptoNetWorth / totalAmount) * 100);

    const data = {
        datasets: [{
            data: [totalNetWorth, traditionalNetWorth, realEstateNetWorth, MFNetWorth, bondNetWorth, cryptoNetWorth],
            backgroundColor: [
                'red',
                'blue',
                'green',
                'yellow',
                'grey',
                'orange'
            ],
            hoverOffset: 2
        }
        ],
        labels: [
            'Gold',
            'Traditional',
            'Real Estate',
            'Mutal Funds, Stocks and ETFs',
            'Bonds',
            'Crypto'
        ]
    };

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Total"} totalAmount={totalAmount} timestamp={new Date(dashboardTimeStamp).toLocaleString()} />
            </div>
            <div className="flex flex-col border-4 border-cyan-900 bg-cyan-400 m-4 gap-4 p-4 font-black justify-center align-center">
                <h1 className="text-3xl text-center">SPLIT :</h1>
                <div className="w-1/2 h-1/2 cursor-pointer justify-center align-center">
                    <Doughnut data={data} />
                </div>
            </div>
        </div >
    )
}

export default Dashboard
