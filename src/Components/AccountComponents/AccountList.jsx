import React, { useState } from 'react'
import Account from './Account';

function AccountList(props) {

    return (
        <div>
            {
                props.accountData.map((account) => {
                    return (
                        <Account key={account.nickName} nickName={account.nickName} bankName={account.bankName} accountNumber={account.accountNumber} removeAccount={props.removeAccount} traditionalWealthUpdation={props.traditionalWealthUpdation}
                        />
                    );
                })
            }
        </div>
    )
}

export default AccountList
