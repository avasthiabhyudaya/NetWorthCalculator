import React from 'react'
import { useState } from 'react'
import BondInstrumentList from '../Components/BondComponents/BondInstrumentList';
import NetWorthCard from '../Components/NetWorthCard';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_BOND_DATA, UPDATE_BOND_NW, DELETE_BOND_DATA, UPDATE_BOND_TIMESTAMP } from '../Redux/Reducers/BondReducers';


function Bonds() {

    const { bondDataList, bondNetWorth, bondTimeStamp } = useSelector((state) => state.bonds)
    const dispatch = useDispatch();

    const [showBondForm, setShowBondForm] = useState(false);

    const addBondInstrument = (event) => {
        event.preventDefault();

        let obj = {
            nickName: event.target[0].value,
            yields: event.target[1].value,
            type: event.target[2].value,
            ISINCode: event.target[3].value,
            faceValue: event.target[4].value,
            quantity: event.target[5].value,
            issueDate: event.target[6].value,
            MaturityDate: event.target[7].value,
        }

        const checkNickName = bondDataList.find((instrument) => {
            return instrument.nickName === obj.nickName
        })

        if (!checkNickName) {
            dispatch({
                type: ADD_BOND_DATA,
                payload: {
                    bondDataList: [...bondDataList, obj]
                }
            });

            dispatch({
                type: UPDATE_BOND_NW,
                payload: {
                    bondNetWorth: bondNetWorth + parseInt(obj.quantity * obj.faceValue, 10)
                }
            })
            dispatch({
                type: UPDATE_BOND_TIMESTAMP,
                payload: {
                    bondTimeStamp: new Date()
                }
            })
        }

        event.target.reset();
        setShowBondForm(prev => !prev)
    }


    function removeBondInstrument(nickNameToBeDeleted, instrumentValue) {

        dispatch({
            type: DELETE_BOND_DATA,
            payload: {
                bondDataList: bondDataList.filter(currBondItem => currBondItem.nickName !== nickNameToBeDeleted)
            }
        });

        dispatch({
            type: UPDATE_BOND_NW,
            payload: {
                bondNetWorth: bondNetWorth - parseInt(instrumentValue, 10)
            }
        })

        dispatch({
            type: UPDATE_BOND_TIMESTAMP,
            payload: {
                bondTimeStamp: new Date()
            }
        })

    }

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Bond"} totalAmount={bondNetWorth} timestamp={new Date(bondTimeStamp).toLocaleString()} />
                <button onClick={() => setShowBondForm(prev => !prev)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showBondForm ? 'X' : '+'}
                </button>
            </div>

            {showBondForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addBondInstrument} autoComplete="off">
                        <div className="flex flex-row justify-around flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml=" bondName">Bond Name :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="bondName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="yields">Yield (in %) :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="yields" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="type">Type :</label>
                                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white" name="type" id="type">
                                    <option className="block py-2 px-4 text-sm 
                                        text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
                                        dark:text-gray-200 dark:hover:text-white" value="public">Public</option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="OTC">
                                        OTC (over the counter)
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="ISINCode">ISIN Code :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="ISINCode" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="faceValue">Face Value :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="faceValue" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="quantity">Quantity :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="quantity" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="issueDate">Issue Date :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="date" id="issueDate" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="maturityDate">Maturity Date :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 
                                    leading-tight focus:outline-none focus:bg-white"
                                    type="date" id="maturityDate" required />
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
                        <h1 className="text-2xl">Bonds</h1>
                    </div>
                </strong>

                <BondInstrumentList
                    bondData={bondDataList}
                    removeBondInstrument={removeBondInstrument}
                />
            </div>


        </div>
    )
}

export default Bonds