import React, { useState } from 'react'
import Account from './Account';

function AccountList({
    accountData = [],
    traditionalWealthUpdation,
    instrumentArrayUpdation,
    removeAccount
}) {

    return (
        <div>
            {
                accountData.map((account) => {
                    return (
                        <Account
                            key={account.nickName}
                            instrumentArrayUpdation={instrumentArrayUpdation}
                            nickName={account.nickName}
                            bankName={account.bankName}
                            accountSum={account.accountSum}
                            accountNumber={account.accountNumber}
                            instruments={account.instruments}
                            removeAccount={removeAccount}
                            traditionalWealthUpdation={traditionalWealthUpdation}
                        />
                    );
                })
            }
        </div>
    )
}

export default AccountList
