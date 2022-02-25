import React from "react";

function GoldInstrument(props) {

    const deleteInstrument = () => {
        props.removeGoldInstrument(props.nickName, instrumentPrice);
    }

    const instrumentPrice = Number(props.weight) * Number(props.goldPrice);

    return (
        < div className="container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ">
            < div className="flex justify-end" >
                <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor" onClick={deleteInstrument}>X</button>
            </div >
            <div className="text-xl"><strong>{props.nickName}</strong></div>
            <div className="instrumentType">Weight : <strong>{props.weight}</strong></div>
            <div className="flex-row">
                <div className="flex justify-between">
                    <h3 className="instrumentTenure">Purity : <strong>{props.purity}</strong> | Date of Purchase : <strong>{props.purchaseDate}</strong></h3>
                    <h3 className="instrumentAmount"><strong>₹{instrumentPrice}</strong></h3>
                </div>
            </div>
        </div >
    )
}

export default GoldInstrument