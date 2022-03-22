import React, { useState } from 'react'
import Account from './Account';

function AccountList({
    traditionalDataList = [],
    traditionalWealthUpdation,
    instrumentArrayAddition,
    instrumentArrayDeletion,
    removeAccount
}) {
    return (
        <div>
            {
                traditionalDataList.map((account) =>
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
                )
            }
        </div>
    )
}

export default AccountList
