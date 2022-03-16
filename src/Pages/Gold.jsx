import React from 'react'
import { useState } from 'react'
import GoldInstrumentList from '../Components/GoldComponents/GoldInstrumentList';
import NetWorthCard from '../Components/NetWorthCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function Gold(props) {


    const goldDataList = useSelector((state) => state.gold)
    console.log(goldDataList);

    const dispatch = useDispatch();


    const initialSum = goldDataList.reduce(function (acc, obj) { return (acc + obj.weight * obj.goldPrice); }, 0);

    const [showGoldForm, setShowGoldForm] = useState(false);
    const [goldData, setGoldData] = useState(goldDataList);
    const [goldNetWorth, setGoldlNetWorth] = useState(initialSum);

    useEffect(() => {
        const data = localStorage.getItem('GoldData');
        if (data) {
            setGoldData(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("GoldData", JSON.stringify(goldData));
    })

    useEffect(() => {
        const netWorth = localStorage.getItem('GoldNetWorth');
        if (netWorth) {
            setGoldlNetWorth(JSON.parse(netWorth))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("GoldNetWorth", JSON.stringify(goldNetWorth));
    })


    const goldWealthUpdation = (newEntry) => {
        setGoldlNetWorth(Number(goldNetWorth) + Number(newEntry));
        props.totalWealthUpdation(newEntry);
    }

    const renderGoldForm = () => {
        setShowGoldForm(!showGoldForm);
    }


    const addGoldInstrument = (event) => {
        event.preventDefault();

        let tempNickName = event.target[0].value;
        let tempWeight = event.target[1].value;
        let tempPurity = event.target[2].value;
        let tempPurchaseDate = event.target[3].value;
        let tempGoldPrice = event.target[4].value;

        let obj = {
            nickName: tempNickName,
            weight: tempWeight,
            purity: tempPurity,
            purchaseDate: tempPurchaseDate,
            goldPrice: tempGoldPrice
        }

        goldData.push(obj);

        let filteredData = goldData.filter((v, i, a) => a.findIndex(t => (t.nickName === v.nickName)) == i);

        setGoldData(filteredData);

        const checkNickName = goldDataList.find((instrument) => {
            return instrument.nickName === obj.nickName
        })

        if (!checkNickName) {
            dispatch({ type: "ADD_GOLDDATA", payload: obj })
        }

        // console.log(accountData);

        goldWealthUpdation(Number(obj.goldPrice) * Number(obj.weight));

        event.target.reset();

        renderGoldForm();
    }


    function removeGoldInstrument(nickName, instrumentValue) {
        let filteredList = goldData.filter(goldInstrument => {
            return goldInstrument.nickName !== nickName;
        });
        setGoldData(filteredList);
        goldWealthUpdation(-instrumentValue);
        console.log(goldData);

        dispatch({ type: "DELETE_CONTACT", payload: nickName })


    }



    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Gold"} totalAmount={goldNetWorth} />
                <button onClick={renderGoldForm}
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

                <GoldInstrumentList goldData={goldData} setGoldData={setGoldData}
                    removeGoldInstrument={removeGoldInstrument}
                    goldNetWorth={props.goldNetWorth}
                    goldWealthUpdation={goldWealthUpdation}
                />
            </div>


        </div>
    )
}

export default Gold