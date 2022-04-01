import React from 'react'
import MFInstrument from './MFInstrument';

function MFInstrumentList({
    MFData,
    removeMFInstrument
}) {
    return (
        <div>
            {
                MFData.map((instrument, i) =>
                    <MFInstrument
                        key={`loc-${i}`}
                        MFName={instrument.MFName}
                        quantity={instrument.quantity}
                        purchaseDate={instrument.purchaseDate}
                        buyPrice={instrument.buyPrice}
                        currentPrice={instrument.currentPrice}
                        removeMFInstrument={removeMFInstrument}
                    />
                )
            }
        </div>
    )
}

export default MFInstrumentList
