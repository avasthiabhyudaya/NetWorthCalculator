import React from 'react'
import { useState } from 'react'
import InstrumentList from './InstrumentList';


function Account(props) {

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const [instrumentData, setInstrumentData] = useState([]);

    const [showInstrumentForm, setShowInstrumentForm] = useState(false);

    const [accountBalance, setAccountBalance] = useState(0);

    const renderInstrumentForm = () => {
        setShowInstrumentForm(!showInstrumentForm);
    }

    const accountWealthUpdation = (newEntry) => {
        console.log(newEntry);
        setAccountBalance(Number(accountBalance) + Number(newEntry));
        console.log(accountBalance);
        props.traditionalWealthUpdation(newEntry);
    }

    const addInstrument = (event) => {
        event.preventDefault();

        let tempnickName = event.target.elements.nickName.value;
        let tempType = event.target.elements.type.value;
        let tempRate = event.target.elements.rate.value;
        let tempTenure = event.target.elements.tenure.value;
        let tempAmount = event.target.elements.amount.value;

        let obj = { nickName: tempnickName, type: tempType, rate: tempRate, tenure: tempTenure, amount: tempAmount }

        const found = instrumentData.findIndex((instrument) => {
            return instrument.nickName === tempnickName;
        })

        instrumentData.push(obj);

        let filteredInstrumentData = instrumentData.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) == i);


        setInstrumentData(filteredInstrumentData);

        props.instrumentArrayUpdation(props.nickName, obj);

        console.log(instrumentData);


        // console.log(accountData);

        console.log(found);

        if (found == -1) {
            accountWealthUpdation(obj.amount);
        }


        event.target.reset();

        renderInstrumentForm();

    }

    const removeInstrument = (nickName) => {

        let instrumentAmount = 0;

        let filteredInstrumentList = instrumentData.filter(instrument => {
            if (instrument.nickName == nickName)
                instrumentAmount = instrument.amount;
            return instrument.nickName !== nickName;
        });
        setInstrumentData(filteredInstrumentList);
        accountWealthUpdation(-instrumentAmount);
        console.log(props.instrumentData);

    }

    const deleteAccount = () => {
        props.removeAccount(props.accountNumber, accountBalance);
    }

    return (
        <div className="relative bg-fuchsia-300 w-full h-full my-4 p-4 shadow border-4 border-purple-600">
            <div>
                <div className="flex justify-end gap-2 m-1">
                    <button onClick={renderInstrumentForm}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                        +
                    </button>
                    <button onClick={deleteAccount}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                        X
                    </button>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-xl"><strong>{props.nickName}</strong></h1>
                    <h1 className="text-xl"><strong>₹{internationalNumberFormat.format(accountBalance / 1)}</strong></h1>
                </div>
                <h2>{props.bankName} | {props.accountNumber}</h2>
            </div>
            {showInstrumentForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full p-2 border border-yellow-300" onSubmit={addInstrument}>
                        <div className="flex justify-end">
                            <button onClick={renderInstrumentForm}
                                className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                                X
                            </button>
                        </div>
                        <div className="flex flex-row justify-around flex-wrap gap-8">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="nickName">nickName :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" name="nickName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="type">Type :</label>
                                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                     border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                     focus:outline-none focus:bg-white" name="type" id="type">
                                    <option value="Fixed Deposit">Fixed Deposit</option>
                                    <option value="Recurring Deposit">Recurring Deposit</option>
                                    <option value="PPF">PPF</option>
                                    <option value="NPS">NPS</option>
                                    <option value="Non Invested">Non Invested</option>
                                </select>
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="rate">Rate :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="number" name="rate" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="tenure">Tenure :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" name="tenure" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="amount">Amount :</label>
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
            <InstrumentList instrumentData={instrumentData}
                setInstrumentData={setInstrumentData}
                accountWealthUpdation={props.accountWealthUpdation} removeInstrument={removeInstrument} />
        </div >
    )
}

export default Account
