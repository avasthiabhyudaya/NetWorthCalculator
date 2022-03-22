import React from 'react'
import { useState } from 'react'
import AccountList from '../Components/AccountComponents/AccountList';
import NetWorthCard from '../Components/NetWorthCard';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TRADITIONAL_DATA, DELETE_TRADITIONAL_DATA, UPDATE_TRADITIONAL_DATA, UPDATE_TRADITIONAL_NW, UPDATE_TRADITIONAL_TIMESTAMP } from '../Redux/Reducers/TraditionalReducer'


function Traditional() {


    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const { traditionalDataList = [], traditionalNetWorth, traditionalTimeStamp } = useSelector((state) => state.traditional)
    const dispatch = useDispatch();

    const [showAccountForm, setShowAccountForm] = useState(false);


    const traditionalWealthUpdation = (newEntry) => {
        setTraditionalNetWorth(parseInt(traditionalNetWorth, 10) + parseInt(newEntry, 10));
        props.totalWealthUpdation(newEntry);
    }


    const addAccount = (event) => {
        event.preventDefault();

        let obj = {
            nickName: event.target[0].value,
            bankName: event.target[1].value,
            accountNumber: event.target[2].value,
            instruments: [],
            accountSum: 0
        }

        const checkAccountNumber = traditionalDataList.find((instrument) => {
            return instrument.accountNumber === obj.accountNumber
        })


        if (!checkAccountNumber) {
            dispatch({
                type: ADD_TRADITIONAL_DATA,
                payload: {
                    traditionalDataList: [...traditionalDataList, obj]
                }
            });

            dispatch({
                type: UPDATE_TRADITIONAL_NW,
                payload: {
                    traditionalNetWorth: parseInt(traditionalNetWorth, 10) + parseInt(obj.accountSum, 10)
                }
            })
            dispatch({
                type: UPDATE_TRADITIONAL_TIMESTAMP,
                payload: {
                    traditionalTimeStamp: new Date()
                }
            })
        }


        event.target.reset();

        setShowAccountForm(prev => !prev)
    }

    function removeAccount(accountNumber, accountBalance) {

        dispatch({
            type: DELETE_TRADITIONAL_DATA,
            payload: {
                traditionalDataList: traditionalDataList.filter(currTraditionalItem => currTraditionalItem.accountNumber !== accountNumber)
            }
        });

        dispatch({
            type: UPDATE_TRADITIONAL_NW,
            payload: {
                traditionalNetWorth: traditionalNetWorth - parseInt(accountBalance, 10)
            }
        })

        dispatch({
            type: UPDATE_TRADITIONAL_TIMESTAMP,
            payload: {
                traditionalTimeStamp: new Date()
            }
        })
    }

    const instrumentArrayAddition = (accountNumber, obj) => {

        let tempTraditionalList = traditionalDataList.slice();

        for (let i = 0; i < tempTraditionalList.length; i++) {
            if (tempTraditionalList[i].accountNumber === accountNumber) {
                tempTraditionalList[i].instruments.push(obj);
                if (obj.type !== 'Loan') {
                    tempTraditionalList[i].accountSum += parseInt(obj.amount, 10);
                }
                if (obj.type === 'Loan') {
                    tempTraditionalList[i].accountSum -= parseInt(obj.amount, 10);
                }
            }
        }

        dispatch({
            type: UPDATE_TRADITIONAL_DATA,
            payload: {
                traditionalDataList: tempTraditionalList
            }
        });

        let tempTraditionalNetWorth = traditionalNetWorth;

        if (obj.type !== 'Loan') {
            tempTraditionalNetWorth += parseInt(obj.amount, 10)
        }

        else if (obj.type === 'Loan') {
            tempTraditionalNetWorth -= parseInt(obj.amount, 10)
        }

        dispatch({
            type: UPDATE_TRADITIONAL_NW,
            payload: {
                traditionalNetWorth: tempTraditionalNetWorth
            }
        })

        dispatch({
            type: UPDATE_TRADITIONAL_TIMESTAMP,
            payload: {
                traditionalTimeStamp: new Date()
            }
        })
    }

    const instrumentArrayDeletion = (accountNumber, instrumentNickName) => {

        let instrumentAmount = 0;
        let instrumentType;
        let tempIValue;

        let tempTraditionalList = traditionalDataList.slice();


        for (let i = 0; i < traditionalDataList.length; i++) {
            if (traditionalDataList[i].accountNumber === accountNumber) {
                tempTraditionalList[i].instruments = traditionalDataList[i].instruments.filter((obj) => {
                    if (obj.nickName === instrumentNickName) {
                        instrumentAmount = obj.amount;
                        instrumentType = obj.type;
                        tempIValue = i;
                    }
                    return obj.nickName !== instrumentNickName
                });
                if (instrumentType !== 'Loan') {
                    tempTraditionalList[i].accountSum -= parseInt(instrumentAmount, 10);
                }
                if (instrumentType === 'Loan') {
                    tempTraditionalList[i].accountSum += parseInt(instrumentAmount, 10);
                }
            }
        }


        dispatch({
            type: UPDATE_TRADITIONAL_DATA,
            payload: {
                traditionalDataList: tempTraditionalList
            }
        });

        let tempTraditionalNetWorth = traditionalNetWorth;

        if (instrumentType !== 'Loan') {
            tempTraditionalNetWorth -= parseInt(instrumentAmount, 10)
        }

        else if (instrumentType === 'Loan') {
            tempTraditionalNetWorth += parseInt(instrumentAmount, 10)
        }


        dispatch({
            type: UPDATE_TRADITIONAL_NW,
            payload: {
                traditionalNetWorth: tempTraditionalNetWorth
            }
        })

        dispatch({
            type: UPDATE_TRADITIONAL_TIMESTAMP,
            payload: {
                traditionalTimeStamp: new Date()
            }
        })

    }




    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Traditional"} totalAmount={traditionalNetWorth} timestamp={new Date(traditionalTimeStamp).toLocaleString()} />
                <button onClick={() => setShowAccountForm(prev => !prev)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showAccountForm ? 'X' : '+'}
                </button>
            </div>

            {showAccountForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addAccount} autoComplete="off">
                        <div className="flex flex-row justify-evenly flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml=" bankName">Account NickName :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="bankName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="bankName">Bank Name :</label>
                                <input className="appearance-none block w-full 
                                    bg-gray-200 text-gray-700 border border-green-500 hover:border-red-500 
                                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="bankName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="accNo">Bank Account Number :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="accNo" required />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 
                                hover:border-teal-700 text-sm 
                                border-4 text-white py-1 px-2 rounded"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )
            }
            <div className="container p-2 my-4 bg-cyan-200 border-4 border-cyan-400">
                <strong>
                    <div className="flex justify-between">
                        <h1 className="text-2xl">Bank Balance</h1>
                        <h1 className="text-2xl">₹{internationalNumberFormat.format(traditionalNetWorth)}</h1>
                    </div>
                </strong>

                <AccountList traditionalDataList={traditionalDataList}
                    removeAccount={removeAccount}
                    traditionalNetWorth={traditionalNetWorth}
                    traditionalWealthUpdation={traditionalWealthUpdation}
                    instrumentArrayAddition={instrumentArrayAddition}
                    instrumentArrayDeletion={instrumentArrayDeletion}
                />
            </div>


        </div >
    )
}

export default Traditional
