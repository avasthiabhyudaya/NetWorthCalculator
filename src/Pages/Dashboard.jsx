import React from 'react'
import NetWorthCard from '../Components/NetWorthCard'
import { useSelector } from 'react-redux'

function Dashboard() {

    const { totalNetWorth = 0, goldDataList, goldTimeStamp } = useSelector((state) => state.gold)
    const { traditionalNetWorth = 0, TraditionalDataList, traditionalTimeStamp } = useSelector((state) => state.traditional);
    const { realEstateNetWorth = 0, realEstateDataList, realEstateTimeStamp } = useSelector((state) => state.realestate);

    let totalAmount = totalNetWorth + traditionalNetWorth + realEstateNetWorth;


    let dashboardTimeStamp = goldTimeStamp > traditionalTimeStamp && goldTimeStamp > realEstateTimeStamp ? goldTimeStamp : traditionalTimeStamp > realEstateTimeStamp ? traditionalTimeStamp : realEstateTimeStamp

    let traditionalPercentage = ((traditionalNetWorth / totalAmount) * 100);
    let goldPercentage = ((totalNetWorth / totalAmount) * 100);
    let realEstatePercentage = ((realEstateNetWorth / totalAmount) * 100);



    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Total"} totalAmount={totalAmount} timestamp={new Date(dashboardTimeStamp).toLocaleString()} />
            </div>
            <div className="w-full flex flex-col border-4 border-cyan-900 bg-cyan-400 m-4 gap-4 p-4 font-black justify-center align-center">
                <h1 className="text-3xl">SPLIT :</h1>
                <div className="flex flex-row gap-4 text-2xl">
                    <div className="flex flex-col gap-6">
                        <label>Traditional Net Worth : </label>
                        <label>Gold Net Worth : </label>
                        <label>Real Estate Net Worth : </label>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1>₹{traditionalNetWorth} ({(traditionalPercentage || 0).toFixed(2)}%)</h1>
                        <h1>₹{totalNetWorth} ({(goldPercentage || 0).toFixed(2)}%)</h1>
                        <h1>₹{realEstateNetWorth} ({(realEstatePercentage || 0).toFixed(2)}%)</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
