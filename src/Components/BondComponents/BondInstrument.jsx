import React from "react";

function BondInstrument({
    removeBondInstrument,
    yields,
    type,
    nickName,
    issueDate,
    maturityDate,
    quantity,
    ISINCode,
    faceValue
}) {

    const deleteInstrument = () => {
        removeBondInstrument(nickName, instrumentValue);
    }

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    const instrumentValue = Number(faceValue) * Number(quantity)


    return (
        < div className="container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ">
            < div className="flex justify-end" >
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor"
                    onClick={deleteInstrument}>X</button>
            </div >
            <div className="text-xl"><strong>{nickName}</strong></div>
            <div className="instrumentType">Yield : <strong>{yields}%</strong></div>
            <div className="flex-row">
                <div className="flex justify-between">
                    <h3 className="instrumentTenure">Type :
                        <strong>{type}</strong> | Issue Date : <strong>{issueDate}
                        </strong> | Maturity Date : <strong>{maturityDate}
                        </strong> | ISIN Code : <strong>{ISINCode}
                        </strong> | Face Value : <strong>{faceValue}
                        </strong></h3>
                    <h3 className="instrumentAmount">
                        <strong>₹{internationalNumberFormat.format(instrumentValue)}</strong>
                    </h3>
                </div>
            </div>
        </div >
    )
}

export default BondInstrument