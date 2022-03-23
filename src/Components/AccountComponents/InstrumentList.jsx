import React from 'react'
import Instrument from './Instrument';

function InstrumentList(props) {

    return (
        <div>
            {
                props.instrumentData?.map((instrument, i) => {
                    return (
                        <Instrument
                            key={instrument.nickName}
                            nickName={instrument.nickName}
                            type={instrument.type}
                            rate={instrument.rate}
                            tenure={instrument.tenure}
                            amount={instrument.amount}
                            removeInstrument={props.removeInstrument}
                        />
                    );
                })
            }
        </div>
    )
}

export default InstrumentList
