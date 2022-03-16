import React from 'react'
import NetWorthCard from '../Components/NetWorthCard'
import { useState } from 'react';

function RealEstate() {

    const [showREForm, setShowREForm] = useState(false);

    const renderREForm = () => {
        setShowREForm(!showREForm);
    }

    const addREInstrument = () => {

    }

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Real Estate"} totalAmount={"0"} />
                <button onClick={renderREForm}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showREForm ? 'X' : '+'}
                </button>
            </div>
            {showREForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addREInstrument}>
                        <div className="flex flex-row justify-around flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for=" instrumentNickName">Instrument NickName :</label>
                                <input className="appearance-none block w-full bg-gray-200 
                                    text-gray-700 border border-green-500 hover:border-red-500 rounded 
                                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="instrumentNickName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="purchaseDate">Date of Purchase :</label>
                                <input className="appearance-none block w-full bg-gray-200 
                                    text-gray-700 border border-green-500 hover:border-red-500 rounded 
                                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="date" id="purchaseDate" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="GoldPrice">Price : </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 
                                    border border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="GoldPrice" required />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 
                                hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    )
}

export default RealEstate
