import React from 'react'
import { useState } from 'react'
import CryptoInstrumentList from '../Components/CryptoComponents/CryptoInstrumentList';
import NetWorthCard from '../Components/NetWorthCard';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_CRYPTO_DATA, UPDATE_CRYPTO_NW, DELETE_CRYPTO_DATA, UPDATE_CRYPTO_TIMESTAMP } from '../Redux/Reducers/CryptoReducers';


function Crypto() {

    const { cryptoDataList, cryptoNetWorth, cryptoTimeStamp } = useSelector((state) => state.crypto)
    const dispatch = useDispatch();

    const [showCryptoForm, setShowCryptoForm] = useState(false);

    const addCryptoInstrument = (event) => {
        event.preventDefault();

        let obj = {
            cryptoName: event.target[0].value,
            wallet: event.target[1].value,
            purchaseDate: event.target[2].value,
            tokenPrice: event.target[3].value,
            quantity: event.target[4].value,
        }

        const checkNickName = cryptoDataList.find((instrument) => {
            return instrument.nickName === obj.nickName
        })

        if (!checkNickName) {
            dispatch({
                type: ADD_CRYPTO_DATA,
                payload: {
                    cryptoDataList: [...cryptoDataList, obj]
                }
            });

            dispatch({
                type: UPDATE_CRYPTO_NW,
                payload: {
                    cryptoNetWorth: cryptoNetWorth + parseInt(obj.quantity * obj.tokenPrice, 10)
                }
            })
            dispatch({
                type: UPDATE_CRYPTO_TIMESTAMP,
                payload: {
                    cryptoTimeStamp: new Date()
                }
            })
        }

        event.target.reset();
        setShowCryptoForm(prev => !prev)
    }


    function removeCryptoInstrument(nickNameToBeDeleted, instrumentValue) {

        dispatch({
            type: DELETE_CRYPTO_DATA,
            payload: {
                cryptoDataList: cryptoDataList.filter(currCryptoItem => currCryptoItem.nickName !== nickNameToBeDeleted)
            }
        });

        dispatch({
            type: UPDATE_CRYPTO_NW,
            payload: {
                cryptoNetWorth: cryptoNetWorth - parseInt(instrumentValue, 10)
            }
        })

        dispatch({
            type: UPDATE_CRYPTO_TIMESTAMP,
            payload: {
                cryptoTimeStamp: new Date()
            }
        })

    }

    return (
        <div className="p-6">
            <div className="flex flex-col justify-center items-center">
                <NetWorthCard AssetType={"Crypto"} totalAmount={cryptoNetWorth} timestamp={new Date(cryptoTimeStamp).toLocaleString()} />
                <button onClick={() => setShowCryptoForm(prev => !prev)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor">
                    {showCryptoForm ? 'X' : '+'}
                </button>
            </div>

            {showCryptoForm && (
                <div className="flex justify-center m-4">
                    <form className="w-full border-2 border-yellow-300 p-4" onSubmit={addCryptoInstrument} autoComplete="off">
                        <div className="flex flex-row justify-around flex-wrap">

                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="cryptoName">Cryptocurrency Name :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="cryptoName" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="wallet">Wallet :</label>
                                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white" name="purity" id="purity">
                                    <option className="block py-2 px-4 text-sm 
                                        text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
                                        dark:text-gray-200 dark:hover:text-white" value="eToro">
                                        eToro
                                    </option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="Coinbase">
                                        Coinbase
                                    </option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="22K">
                                        Binance
                                    </option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="Huobi">
                                        Huobi
                                    </option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="CoinDCX Pro">
                                        CoinDCX Pro
                                    </option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="CoinSwitch Kuber">
                                        CoinSwitch Kuber
                                    </option>
                                    <option className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                        dark:hover:bg-gray-600 dark:text-gray-200 
                                        dark:hover:text-white" value="other">
                                        Other
                                    </option>
                                </select>
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
                                    forhtml="tokenPrice">Token Price :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="tokenPrice" required />
                            </div>
                            <div>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    forhtml="quantity">Quantity :</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                                    border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight 
                                    focus:outline-none focus:bg-white"
                                    type="text" id="quantity" required />
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
                        <h1 className="text-2xl">Cryptocurrency</h1>
                    </div>
                </strong>

                <CryptoInstrumentList
                    cryptoData={cryptoDataList}
                    removeCryptoInstrument={removeCryptoInstrument}
                />
            </div>


        </div>
    )
}

export default Crypto