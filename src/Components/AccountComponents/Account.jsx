import React from 'react'
import { useState } from 'react'
import InstrumentList from './InstrumentList';


function Account({
    accountNumber,
    accountSum,
    nickName,
    instruments,
    bankName,
    instrumentArrayAddition,
    instrumentArrayDeletion,
    removeAccount,
}) {

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const [showInstrumentForm, setShowInstrumentForm] = useState(false);

    const addInstrument = (event) => {
        event.preventDefault();

        let tempnickName = event.target.elements.nickName.value;

        let obj = {
            nickName: event.target.elements.nickName.value,
            type: event.target.elements.type.value,
            rate: event.target.elements.rate.value,
            tenure: event.target.elements.tenure.value,
            amount: event.target.elements.amount.value
        }

        const found = instruments.findIndex((instrument) => {
            return instrument.nickName === tempnickName;
        })

        if (found == -1) {
            instrumentArrayAddition(accountNumber, obj);
        }


        event.target.reset();

        setShowInstrumentForm(prev => !prev)
    }

    const removeInstrument = (nickName) => {
        instrumentArrayDeletion(accountNumber, nickName);

    }

    const deleteAccount = () => {
        removeAccount(accountNumber, accountSum);

    }

    return (
        <div className="relative bg-fuchsia-300 w-full h-full my-4 p-4 shadow border-4 border-purple-600">
            <div>
                <div className="flex justify-end gap-2 m-1">
                    <button onClick={() => setShowInstrumentForm(prev => !prev)}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                        +
                    </button>
                    <button onClick={deleteAccount}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                        X
                    </button>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-xl"><strong>{nickName}</strong></h1>
                    <h1 className="text-xl"><strong>₹{internationalNumberFormat.format(accountSum)}</strong></h1>
                </div>
                <h2>{bankName} | {accountNumber}</h2>
            </div>
            {showInstrumentForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full p-2 border border-yellow-300" onSubmit={addInstrument} autoComplete="off">
                        <div className="flex justify-end">
                            <button onClick={() => setShowInstrumentForm(prev => !prev)}
                                className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                                X
                            </button>
                        </div>
                        <div className="flex flex-row justify-around flex-wrap gap-8">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forHtml="nickName">nickName :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" name="nickName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forHtml="type">Type :</label>
                                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                     border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                     focus:outline-none focus:bg-white" name="type" id="type">
                                    <option value="Fixed Deposit">Fixed Deposit</option>
                                    <option value="Recurring Deposit">Recurring Deposit</option>
                                    <option value="PPF">PPF</option>
                                    <option value="NPS">NPS</option>
                                    <option value="Loan">Loan</option>
                                    <option value="Non Invested">Non Invested</option>
                                </select>
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forHtml="rate">Rate :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" name="rate" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forHtml="tenure">Tenure (in years) :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" name="tenure" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forHtml="amount">Amount :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" name="amount" required />
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
            <InstrumentList
                instrumentData={instruments}
                removeInstrument={removeInstrument}
            />
        </div >
    )
}

export default Account
