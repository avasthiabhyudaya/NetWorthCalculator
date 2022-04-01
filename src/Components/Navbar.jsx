import React from 'react'
import { store } from '../store';
import logo from './../Images/logo.png';
import { REINIT_REAL_ESTATE_PROPS } from '../Redux/Reducers/RealEstateReducers';
import { REINIT_GOLD_PROPS } from '../Redux/Reducers/GoldReducer';
import { REINIT_TRADITIONAL_PROPS } from '../Redux/Reducers/TraditionalReducer';
import { REINIT_DASHBOARD_DATA } from '../Redux/Reducers/DashboardReducers';
import { REINIT_MF_PROPS } from '../Redux/Reducers/MutualFundsReducers';
import { REINIT_BOND_PROPS } from '../Redux/Reducers/BondReducers';
import { REINIT_CRYPTO_PROPS } from '../Redux/Reducers/CryptoReducers';
import { useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';

function Navbar() {

    const dispatch = useDispatch();
    const inputFile = useRef(null);

    const [uploadedFile, setUploadedFile] = useState("");

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
            const filename = files[0].name;

            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

            setUploadedFile(files[0]);
        }
    };

    useEffect(() => {
        console.log('File', uploadedFile);
    }, [uploadedFile])




    const resetAll = () => {
        dispatch({
            type: REINIT_REAL_ESTATE_PROPS
        })
        dispatch({
            type: REINIT_GOLD_PROPS
        })
        dispatch({
            type: REINIT_TRADITIONAL_PROPS
        })
        dispatch({
            type: REINIT_DASHBOARD_DATA
        })
        dispatch({
            type: REINIT_MF_PROPS
        })
        dispatch({
            type: REINIT_BOND_PROPS
        })
        dispatch({
            type: REINIT_CRYPTO_PROPS
        })
    }

    const downloadFile = async () => {
        const fileName = prompt('Please enter a name for the file to be downloaded') || "file";
        const json = JSON.stringify(store.getState());
        const blob = new Blob([json], { type: 'application/json' });
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex">
                        <img className="mr-3 h-10" src={logo} alt="" />
                    </a>
                    <button data-collapse-toggle="mobile-menu" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 
                            rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
                            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 
                                0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"><path
                                fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 
                        0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 
                        01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={resetAll}>
                                    RESET
                                </button>
                            </li>
                            <li>
                                <button id="download" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 
                                px-4 rounded-full" onClick={downloadFile}>
                                    DOWNLOAD
                                </button>
                            </li>
                            <li>
                                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={onButtonClick}>
                                    UPLOAD
                                </button>
                                <input type='file' id='file' onChange={handleFileUpload} ref={inputFile} style={{ display: 'none' }} />
                            </li>
                            {/* <li>
                                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    MODE
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </div >
    )
}

export default Navbar
