import React from "react";

function Instrument(props) {

    const deleteInstrument = () => {
        props.removeInstrument(props.nickName);
    }

    const internationalNumberFormat = new Intl.NumberFormat('en-IN')

    return (
        < div className="container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ">
            < div className="flex justify-end" >
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor"
                    onClick={deleteInstrument}>X</button>
            </div >
            <div className="text-xl"><strong>{props.nickName}</strong></div>
            <div className="instrumentType">Type : <strong>{props.type}</strong></div>
            <div className="flex-row">
                <div className="flex justify-between">
                    <h3 className="instrumentTenure">Rate : <strong>{props.rate}%</strong> | Tenure :
                        <strong>{props.tenure} years</strong>
                    </h3>
                    <h3 className="instrumentAmount">
                        <strong>₹{internationalNumberFormat.format(props.amount)}</strong>
                    </h3>
                </div>
            </div>
        </div >
    )
}

export default Instrument