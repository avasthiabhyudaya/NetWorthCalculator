import React from "react";

function CryptoInstrument({
    removeCryptoInstrument,
    wallet,
    tokenPrice,
    quantity,
    cryptoName,
    purchaseDate,
}) {

    const deleteInstrument = () => {
        removeCryptoInstrument(cryptoName, instrumentPrice);
    }

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const instrumentPrice = Number(quantity) * Number(tokenPrice);

    return (
        < div className="container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ">
            < div className="flex justify-end" >
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor"
                    onClick={deleteInstrument}>X</button>
            </div >
            <div className="text-xl"><strong>{cryptoName}</strong></div>
            <div className="instrumentType">Wallet : <strong>{wallet}</strong> | Token Price : <strong>₹{internationalNumberFormat.format(tokenPrice)}</strong></div>
            <div className="flex-row">
                <div className="flex justify-between">
                    <h3 className="instrumentTenure">Date of Purchase : <strong>{purchaseDate}
                    </strong></h3>
                    <h3 className="instrumentAmount">
                        <strong>₹{internationalNumberFormat.format(instrumentPrice)}</strong>
                    </h3>
                </div>
            </div>
        </div >
    )
}

export default CryptoInstrument