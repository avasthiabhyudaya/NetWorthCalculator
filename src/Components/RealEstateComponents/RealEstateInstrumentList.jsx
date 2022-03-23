import React from 'react'
import RealEstateInstrument from './RealEstateInstrument';

function RealEstateInstrumentList({
    realEstateData,
    removeREInstrument,
    rentFlag
}) {
    return (
        <div>
            {
                realEstateData.map((instrument, i) =>
                    <RealEstateInstrument
                        key={instrument.nickName}
                        nickName={instrument.nickName}
                        type={instrument.type}
                        rentIncome={instrument.rentIncome}
                        purchaseDate={instrument.purchaseDate}
                        area={instrument.area}
                        priceSqft={instrument.priceSqft}
                        rentFlag={rentFlag}
                        removeREInstrument={removeREInstrument}
                    />
                )
            }
        </div>
    )
}

export default RealEstateInstrumentList
