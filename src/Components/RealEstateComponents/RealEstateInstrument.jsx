import React from "react";

function RealEstateInstrument({
    nickName,
    type,
    rentIncome,
    purchaseDate,
    area,
    priceSqft,
    removeREInstrument,
    rentFlag
}) {

    const deleteInstrument = () => {
        removeREInstrument(nickName, instrumentPrice);
    }

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const instrumentPrice = Number(priceSqft) * Number(area);

    return (
        < div className="container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ">
            < div className="flex justify-end" >
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor"
                    onClick={deleteInstrument}>X</button>
            </div >
            <div className="text-xl"><strong>{nickName}</strong></div>
            <div className="instrumentType">Type : <strong>{type}</strong></div>
            <div className="flex-row">
                <div className="flex justify-between">
                    <h3 className="instrumentTenure">Rent Income :
                        <strong>₹{rentIncome}</strong> | Date of Purchase : <strong>{purchaseDate}
                        </strong></h3>
                    <h3 className="instrumentAmount">
                        <strong>₹{internationalNumberFormat.format(instrumentPrice)}</strong>
                    </h3>
                </div>
            </div>
        </div >
    )
}

export default RealEstateInstrument