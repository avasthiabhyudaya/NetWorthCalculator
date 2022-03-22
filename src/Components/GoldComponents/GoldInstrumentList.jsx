import React from 'react'
import GoldInstrument from './GoldInstrument';

function GoldInstrumentList({
    goldData,
    removeGoldInstrument
}) {
    return (
        <div>
            {
                goldData.map((instrument, i) =>
                    <GoldInstrument
                        key={`loc-${i}`}
                        nickName={instrument.nickName}
                        weight={instrument.weight}
                        purity={instrument.purity}
                        purchaseDate={instrument.purchaseDate}
                        goldPrice={instrument.goldPrice}
                        removeGoldInstrument={removeGoldInstrument}
                    />
                )
            }
        </div>
    )
}

export default GoldInstrumentList
