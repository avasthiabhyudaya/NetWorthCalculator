import React from 'react'
import { useState } from 'react'
import AccountList from '../Components/AccountComponents/AccountList';
import NetWorthCard from '../Components/NetWorthCard';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TRADITIONAL_DATA, DELETE_TRADITIONAL_DATA, UPDATE_TRADITIONAL_DATA, UPDATE_TRADITIONAL_NW, REINIT_TRADITIONAL_PROPS } from '../Redux/Reducers/TraditionalReducer'


function Traditional(props) {

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const { traditionalDataList, traditionalNetWorth } = useSelector((state) => state.traditional)
    const dispatch = useDispatch();

    const [showAccountForm, setShowAccountForm] = useState(false);
    // const [accountData, setAccountData] = useState([]);
    // const [traditionalNetWorth, setTraditionalNetWorth] = useState(0);




    // const renderAccountForm = () => {
    //     setShowAccountForm(!showAccountForm);
    // }

    const traditionalWealthUpdation = (newEntry) => {
        setTraditionalNetWorth(parseInt(traditionalNetWorth, 10) + parseInt(newEntry, 10));
        props.totalWealthUpdation(newEntry);
        // console.log(traditionalNetWorth);
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

        // accountData.push(obj);

        // let filteredData = accountData.filter((v, i, a) => a.findIndex(t => (t.accountNumber === v.accountNumber)) == i);

        const checkAccountNumber = traditionalDataList.find((instrument) => {
            return instrument.accountNumber === obj.accountNumber
        })

        // setAccountData(filteredData);

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

        }

        // console.log(accountData);

        event.target.reset();

        setShowAccountForm(prev => !prev)
    }

    function removeAccount(accountNumber, accountBalance) {
        // let filteredList = accountData.filter(account => {
        //     return account.accountNumber !== accountNumber;
        // });
        // setAccountData(filteredList);
        // traditionalWealthUpdation(-accountBalance);
        // console.log(props.accountData);

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

    }

    const instrumentArrayUpdation = (accountNumber, obj) => {

        // for (let i = 0; i < accountData.length; i++) {
        //     if (accountData[i].nickName === accountNickName) {
        //         accountData[i].instruments.push(obj);
        //         console.log(accountData[i].instruments);
        //     }
        // }

        //try splice and find flaw with it
        let tempTraditionalList = traditionalDataList.slice();

        for (let i = 0; i < tempTraditionalList.length; i++) {
            if (tempTraditionalList[i].accountNumber === accountNumber) {
                tempTraditionalList[i].instruments.push(obj);
                tempTraditionalList[i].accountSum += parseInt(obj.amount, 10);
            }
        }

        dispatch({
            type: DELETE_TRADITIONAL_DATA,
            payload: {
                traditionalDataList: tempTraditionalList
            }
        });

        dispatch({
            type: UPDATE_TRADITIONAL_NW,
            payload: {
                traditionalNetWorth: traditionalNetWorth + parseInt(obj.amount, 10)
            }
        })
    }




    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Traditional"} totalAmount={traditionalNetWorth} />
                <button onClick={() => setShowAccountForm(prev => !prev)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showAccountForm ? 'X' : '+'}
                </button>
            </div>

            {showAccountForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addAccount}>
                        <div className="flex flex-row justify-evenly flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for=" bankName">Account NickName :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="bankName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="bankName">Bank Name :</label>
                                <input className="appearance-none block w-full 
                                    bg-gray-200 text-gray-700 border border-green-500 hover:border-red-500 
                                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    type="text" id="bankName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="accNo">Bank Account Number :</label>
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

                <AccountList accountData={traditionalDataList}
                    removeAccount={removeAccount}
                    traditionalNetWorth={traditionalNetWorth}
                    traditionalWealthUpdation={traditionalWealthUpdation}
                    instrumentArrayUpdation={instrumentArrayUpdation} />
            </div>


        </div >
    )
}

export default Traditional
