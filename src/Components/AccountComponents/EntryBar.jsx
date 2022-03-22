import React from 'react'

function EntryBar(props) {
    function passData(event) {
        event.preventDefault();
        props.setAccountData("");
    }

    function printData(event) {
        event.preventDefault();
        props.setAccountData(event.target.value);
    }

    return (
        <form id="formOne" className="search-bar-container" onSubmit={passData} >
            <input name="accountName" type="text" className="text" value={props.accountName} onChange={printData} />
            <input name="accountNumber" type="text" className="text" value={props.accountNumber} onChange={printData} />
            <button type="submit" className="btn">submit</button>
        </form>
    )
}

export default EntryBar
