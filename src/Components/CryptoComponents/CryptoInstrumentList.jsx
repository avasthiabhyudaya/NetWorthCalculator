import React from 'react'
import CryptoInstrument from './CryptoInstrument';

function CryptoInstrumentList({
    cryptoData,
    removeCryptoInstrument
}) {
    return (
        <div>
            {
                cryptoData.map((instrument, i) =>
                    <CryptoInstrument
                        key={`loc-${i}`}
                        cryptoName={instrument.cryptoName}
                        wallet={instrument.wallet}
                        quantity={instrument.quantity}
                        purchaseDate={instrument.purchaseDate}
                        tokenPrice={instrument.tokenPrice}
                        removeCryptoInstrument={removeCryptoInstrument}
                    />
                )
            }
        </div>
    )
}

export default CryptoInstrumentList
