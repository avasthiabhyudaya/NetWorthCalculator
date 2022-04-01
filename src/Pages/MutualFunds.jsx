import React from 'react'
import { useState } from 'react'
import MFInstrumentList from '../Components/MFComponents/MFInstrumentList';
import NetWorthCard from '../Components/NetWorthCard';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MF_DATA, UPDATE_MF_NW, DELETE_MF_DATA, UPDATE_MF_TIMESTAMP } from '../Redux/Reducers/MutualFundsReducers.jsx';


function MutualFunds() {

    const { MFDataList, MFNetWorth, MFTimeStamp } = useSelector((state) => state.mutualFunds)
    const dispatch = useDispatch();

    const [showMFForm, setShowMFForm] = useState(false);

    const addMFInstrument = (event) => {
        event.preventDefault();

        let obj = {
            MFName: event.target[0].value,
            quantity: event.target[1].value,
            purchaseDate: event.target[2].value,
            buyPrice: event.target[3].value,
            currentPrice: event.target[4].value
        }

        const checkNickName = MFDataList.find((instrument) => {
            return instrument.MFName === obj.MFName
        })

        if (!checkNickName) {
            dispatch({
                type: ADD_MF_DATA,
                payload: {
                    MFDataList: [...MFDataList, obj]
                }
            });

            dispatch({
                type: UPDATE_MF_NW,
                payload: {
                    MFNetWorth: MFNetWorth + parseInt(obj.currentPrice * obj.quantity, 10)
                }
            })
            dispatch({
                type: UPDATE_MF_TIMESTAMP,
                payload: {
                    MFTimeStamp: new Date()
                }
            })
        }

        event.target.reset();
        setShowMFForm(prev => !prev)
    }


    function removeMFInstrument(nickNameToBeDeleted, instrumentValue) {

        dispatch({
            type: DELETE_MF_DATA,
            payload: {
                MFDataList: MFDataList.filter(currMFItem => currMFItem.MFName !== nickNameToBeDeleted)
            }
        });

        dispatch({
            type: UPDATE_MF_NW,
            payload: {
                MFNetWorth: MFNetWorth - parseInt(instrumentValue, 10)
            }
        })

        dispatch({
            type: UPDATE_MF_TIMESTAMP,
            payload: {
                MFTimeStamp: new Date()
            }
        })

    }

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Stocks, MFs & ETF"} totalAmount={MFNetWorth} timestamp={new Date(MFTimeStamp).toLocaleString()} />
                <button onClick={() => setShowMFForm(prev => !prev)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showMFForm ? 'X' : '+'}
                </button>
            </div>

            {showMFForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addMFInstrument} autoComplete="off">
                        <div className="flex flex-row justify-around flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml=" MFName">Stock/ Mutual Fund/ ETF Name :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="MFName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="quantity">Quantity (NAV units) :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="quantity" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="purchaseDate">Date of Purchase :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="date" id="purchaseDate" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="MFPrice">Average Buy Price :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="MFPrice" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="MFCurrentPrice">Current Price :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="MFCurrentPrice" required />
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
                        <h1 className="text-2xl">Mutual Funds, Stocks and ETFs</h1>
                    </div>
                </strong>

                <MFInstrumentList
                    MFData={MFDataList}
                    removeMFInstrument={removeMFInstrument}
                />
            </div>


        </div>
    )
}

export default MutualFunds