import React from 'react'
import { useState } from 'react'
import GoldInstrumentList from '../Components/GoldComponents/GoldInstrumentList';
import NetWorthCard from '../Components/NetWorthCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ADD_GOLD_DATA, UPDATE_GOLD_NW, DELETE_GOLD_DATA } from '../Redux/Reducers/GoldReducer';


function Gold() {

    const { goldDataList, totalNetWorth } = useSelector((state) => state.gold)
    const dispatch = useDispatch();

    const [showGoldForm, setShowGoldForm] = useState(false);

    const addGoldInstrument = (event) => {
        event.preventDefault();
        
        let obj = {
            nickName: event.target[0].value,
            weight: event.target[1].value,
            purity: event.target[2].value,
            purchaseDate: event.target[3].value,
            goldPrice: event.target[4].value
        }

        const checkNickName = goldDataList.find((instrument) => {
            return instrument.nickName === obj.nickName
        })

        if (!checkNickName) {
            dispatch({ 
                type: ADD_GOLD_DATA, 
                payload: {
                    goldDataList: [ ...goldDataList, obj ]
                } 
            });

            dispatch({ 
                type: UPDATE_GOLD_NW, 
                payload: {
                    totalNetWorth: totalNetWorth + parseInt(obj.goldPrice * obj.weight, 10)
                } 
            })

        }
        event.target.reset();
        setShowGoldForm(prev => !prev)
    }


    function removeGoldInstrument(nickNameToBeDeleted, instrumentValue) {
        
        dispatch({ 
            type: DELETE_GOLD_DATA, 
            payload: {
                goldDataList: goldDataList.filter(currGoldItem => currGoldItem.nickName !== nickNameToBeDeleted)
            } 
        });

        dispatch({ 
            type: UPDATE_GOLD_NW, 
            payload: {
                totalNetWorth: totalNetWorth - parseInt(instrumentValue, 10)
            } 
        })

    }

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Gold"} totalAmount={totalNetWorth} />
                <button onClick={() => setShowGoldForm(prev => !prev)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showGoldForm ? 'X' : '+'}
                </button>
            </div>

            {showGoldForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addGoldInstrument}>
                        <div className="flex flex-row justify-around flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for=" instrumentNickName">Instrument NickName :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="instrumentNickName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="weight">Weight (in grams) :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="weight" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="purity">Purity :</label>
                                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white" name="purity" id="purity">
                                    <option className="block py-2 px-4 text-sm 
                                        text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
                                        dark:text-gray-200 dark:hover:text-white" value="24K">24K</option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="22K">22K</option>
                                </select>
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="purchaseDate">Date of Purchase :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="date" id="purchaseDate" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="GoldPrice">Gold Price (per gram) :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
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
            )
            }
            <div className="container p-2 my-4 bg-amber-300 border-4 border-amber-600">
                <strong>
                    <div className="flex justify-between">
                        <h1 className="text-2xl">Aurum</h1>
                    </div>
                </strong>

                <GoldInstrumentList 
                    goldData={goldDataList}
                    removeGoldInstrument={removeGoldInstrument}
                />
            </div>


        </div>
    )
}

export default Gold