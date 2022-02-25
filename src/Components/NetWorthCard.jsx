import React from 'react'

function NetWorthCard(props) {
    return (
        <div className="justify-center items-center border-2 border-red-500 my-4 p-2 bg-red-100 shadow">
            <div className="w-96 h-72">
                <h1 className=" flex justify-center text-3xl font-black">{props.AssetType}</h1>
                <h1 className=" flex justify-center text-3xl font-black m-4">Net Worth</h1>
                <div className="justify-center items-center">
                    <h3 className=" flex justify-center align-center text-3xl font-black m-10 border-4 border-red-500">₹{props.totalAmount}</h3>
                </div>
            </div>
        </div>
    )
}

export default NetWorthCard
