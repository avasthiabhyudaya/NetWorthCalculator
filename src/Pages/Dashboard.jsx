import React, { useState } from 'react'
import NetWorthCard from '../Components/NetWorthCard'

function Dashboard(props) {


    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Total"} totalAmount={props.totalWealth} />
            </div>
            {/* <div className="w-full flex flex-col border-4 border-cyan-900 bg-cyan-400 m-4 gap-4 p-4 font-black">
                <h1 className="text-3xl">SPLIT :</h1>
                <div className="flex flex-row gap-4 text-2xl">
                    <div className="flex flex-col gap-6">
                        <label>Traditional Net Worth : </label>
                        <label>Gold Net Worth : </label>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1>₹{ } ({props.traditionalPercentage}%)</h1>
                        <h1>₹{ } ({props.goldPercentage}%)</h1>
                    </div>
                </div>
            </div> */}
        </div >
    )
}

export default Dashboard
