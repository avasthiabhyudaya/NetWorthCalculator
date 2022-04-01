import React from 'react'
import BondInstrument from './BondInstrument';

function BondInstrumentList({
    bondData,
    removeBondInstrument
}) {
    return (
        <div>
            {
                bondData.map((instrument, i) =>
                    <BondInstrument
                        key={`loc-${i}`}
                        nickName={instrument.nickName}
                        yields={instrument.yields}
                        type={instrument.type}
                        ISINCode={instrument.ISINCode}
                        faceValue={instrument.faceValue}
                        quantity={instrument.quantity}
                        issueDate={instrument.purchaseDate}
                        maturityDate={instrument.maturityDate}
                        removeBondInstrument={removeBondInstrument}
                    />
                )
            }
        </div>
    )
}

export default BondInstrumentList
