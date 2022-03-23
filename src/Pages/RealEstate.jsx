import React from 'react'
import NetWorthCard from '../Components/NetWorthCard'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_REAL_ESTATE_DATA, UPDATE_REAL_ESTATE_NW, DELETE_REAL_ESTATE_DATA, UPDATE_REAL_ESTATE_TIMESTAMP } from '../Redux/Reducers/RealEstateReducers';
import RealEstateInstrumentList from '../Components/RealEstateComponents/RealEstateInstrumentList'

function RealEstate() {

    const { realEstateDataList, realEstateNetWorth, realEstateTimeStamp } = useSelector((state) => state.realestate)
    const dispatch = useDispatch();




    const [showREForm, setShowREForm] = useState(false);
    const [rentFlag, setRentFlag] = useState(false);

    const rentableInstruments = [
        'Rent/PG',
        'Flat/Bungalow/RowHouse',
        'Commercial Office'
    ]

    const addREInstrument = (event) => {
        event.preventDefault();

        let obj = {
            nickName: event.target[0].value,
            type: event.target[1].value,
            rentIncome: event.target[2].value,
            purchaseDate: event.target[3].value,
            area: event.target[4].value,
            priceSqft: event.target[5].value
        }

        const checkNickName = realEstateDataList.find((instrument) => {
            return instrument.nickName === obj.nickName
        })

        if (!checkNickName) {
            dispatch({
                type: ADD_REAL_ESTATE_DATA,
                payload: {
                    realEstateDataList: [...realEstateDataList, obj]
                }
            });

            dispatch({
                type: UPDATE_REAL_ESTATE_NW,
                payload: {
                    realEstateNetWorth: realEstateNetWorth + parseInt(obj.area * obj.priceSqft, 10)
                }
            });
            dispatch({
                type: UPDATE_REAL_ESTATE_TIMESTAMP,
                payload: {
                    realEstateTimeStamp: new Date()
                }
            });

        }

        event.target.reset();
        setShowREForm(prev => !prev)

    }

    const removeREInstrument = (nickNameToBeDeleted, instrumentValue) => {
        dispatch({
            type: DELETE_REAL_ESTATE_DATA,
            payload: {
                realEstateDataList: realEstateDataList.filter(currREItem => currREItem.nickName !== nickNameToBeDeleted)
            }
        });

        dispatch({
            type: UPDATE_REAL_ESTATE_NW,
            payload: {
                realEstateNetWorth: realEstateNetWorth - parseInt(instrumentValue, 10)
            }
        })

        dispatch({
            type: UPDATE_REAL_ESTATE_TIMESTAMP,
            payload: {
                realEstateTimeStamp: new Date()
            }
        });

    }

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Real Estate"} totalAmount={realEstateNetWorth} timestamp={new Date(realEstateTimeStamp).toLocaleString()} />
                <button onClick={() => setShowREForm(prev => !prev)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showREForm ? 'X' : '+'}
                </button>
            </div>
            {showREForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addREInstrument} autoComplete="off">
                        <div className="flex flex-row justify-evenly flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor=" instrumentNickName">Instrument NickName :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="instrumentNickName" required />
                            </div>

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="type">Type :</label>
                                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                     border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    //  focus:outline-none focus:bg-white" name="type" id="type"
                                    onChange={(e) => {
                                        if (rentableInstruments.includes(e.target.value) && rentFlag) {
                                            setRentFlag(prev => prev)
                                        }
                                        else if (rentableInstruments.includes(e.target.value) || rentFlag) {
                                            setRentFlag(prev => !prev)
                                        }
                                    }}
                                >
                                    <option value="Land">Land</option>
                                    <option value="Flat/Bungalow/RowHouse">Flat/Bungalow/RowHouse</option>
                                    <option value="Rent/PG">Rent/PG</option>
                                    <option value="Studio Apartment">Studio Apartment</option>
                                    <option value="Commercial Office">Commercial Office</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Food Franchise">Food Franchise</option>
                                </select>
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="RentIncome">Rent Income :</label>
                                <input className="appearance-none block w-full bg-gray-200 
                                    text-gray-700 border border-green-500 hover:border-red-500 rounded 
                                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="RentIncome" disabled={!rentFlag} />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="purchaseDate">Date of Purchase/Occupancy :</label>
                                <input className="appearance-none block w-full bg-gray-200 
                                    text-gray-700 border border-green-500 hover:border-red-500 rounded 
                                    py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="date" id="purchaseDate" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="Area"> Area (in Sq.Ft): </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 
                                    border border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="GoldPrice" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="Area"> Price/Sq.Ft: </label>
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
            )
            }

            <div className="container p-2 my-4 bg-amber-300 border-4 border-amber-600">
                <strong>
                    <div className="flex justify-between">
                        <h1 className="text-2xl">Real Estate Assets</h1>
                    </div>
                </strong>

                <RealEstateInstrumentList
                    realEstateData={realEstateDataList}
                    removeREInstrument={removeREInstrument}
                    rentFlag={rentFlag}
                />
            </div>

        </div >
    )
}

export default RealEstate
