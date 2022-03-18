import React, { useState } from 'react'
import Account from './Account';

function AccountList({
    accountData = [],
    traditionalWealthUpdation,
    instrumentArrayAddition,
    instrumentArrayDeletion,
    removeAccount
}) {

    return (
        <div>
            {
                accountData.map((account) => {
                    return (
                        <Account
                            key={account.nickName}
                            instrumentArrayAddition={instrumentArrayAddition}
                            instrumentArrayDeletion={instrumentArrayDeletion}
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
