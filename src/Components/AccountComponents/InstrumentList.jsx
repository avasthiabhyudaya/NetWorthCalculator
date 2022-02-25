import React from 'react'
import Instrument from './Instrument';

function InstrumentList(props) {

    return (
        <div>
            {
                props.instrumentData.map((instrument, i) => {
                    return (
                        <Instrument key={`loc-${i}`} nickName={instrument.nickName} serialNumber={i + 1} type={instrument.type} rate={instrument.rate}
                            tenure={instrument.tenure} amount={instrument.amount} removeInstrument={props.removeInstrument} accountWealthUpdation={props.accountWealthUpdation}
                        />
                    );
                })
            }
        </div>
    )
}

export default InstrumentList
