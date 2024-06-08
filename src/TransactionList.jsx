import React from 'react';

const TransactionList = ({ transactions, initialBalance }) => {
    const totalBalance = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'credit') {
            return acc + transaction.amount;
        } else if (transaction.type === 'debit') {
            return acc - transaction.amount;
        }
        return acc;
    }, initialBalance);

    return (
        <div>
            <h3>Transactions</h3>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.type === 'credit' ? '+' : '-'} {transaction.amount} Rs ({transaction.product})
                    </li>
                ))}
            </ul>
            <p>Total Balance: {totalBalance} Rs</p>
        </div>
    );
};

export default TransactionList;
