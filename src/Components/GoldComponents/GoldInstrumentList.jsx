import React from 'react'
import GoldInstrument from './GoldInstrument';

function GoldInstrumentList(props) {
    return (
        <div>
            {
                props.goldData.map((instrument, i) => {
                    return (
                        <GoldInstrument key={`loc-${i}`} nickName={instrument.nickName} weight={instrument.weight} purity={instrument.purity}
                            purchaseDate={instrument.purchaseDate} goldPrice={instrument.goldPrice} removeGoldInstrument={props.removeGoldInstrument} goldWealthUpdation={props.goldWealthUpdation}
                        />
                    );
                })
            }

        </div>
    )
}

export default GoldInstrumentList
