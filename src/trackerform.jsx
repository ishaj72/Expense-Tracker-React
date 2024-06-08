import React, { useState } from 'react';
import TransactionList from './TransactionList';

const TrackerForm = () => {
    const [prod, setProd] = useState('');
    const [amnt, setAmnt] = useState('');
    const [blnce, setBlnce] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [initialBalanceMessage, setInitialBalanceMessage] = useState('');

    const handleChange = (e) => {
        setProd(e.target.value);
    };

    const handleAmount = (e) => {
        setAmnt(e.target.value);
    };

    const handleBalance = (e) => {
        setBlnce(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.nativeEvent.submitter.name === 'addBalance') {
            setInitialBalanceMessage(`You have added an initial balance of ${blnce} Rs.`);
        } else if (e.nativeEvent.submitter.name === 'addTransaction') {
            const newTransaction = {
                type: 'credit',
                product: prod,
                amount: parseFloat(amnt)
            };
            setTransactions([...transactions, newTransaction]);
        } else if (e.nativeEvent.submitter.name === 'debitTransaction') {
            const newTransaction = {
                type: 'debit',
                product: prod,
                amount: parseFloat(amnt)
            };
            setTransactions([...transactions, newTransaction]);
        }
        setProd('');
        setAmnt('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Initial Balance</p>
                <input onChange={handleBalance} value={blnce} type="text" placeholder="Enter the Initial Balance" />
                <br />
                <button type="submit" name="addBalance">Add Balance</button>
                {initialBalanceMessage && <p>{initialBalanceMessage}</p>}
                <p>Product</p>
                <input onChange={handleChange} value={prod} type="text" placeholder="Enter the product name" />
                <p>Amount</p>
                <input onChange={handleAmount} value={amnt} type="text" placeholder="Enter the amount" />
                <br />
                <button type="submit" name="addTransaction">Credit Amount</button>
                <br />
                <button type="submit" name="debitTransaction">Debit Amount</button>
            </form>
            <TransactionList transactions={transactions} initialBalance={parseFloat(blnce)} />
        </>
    );
};

export default TrackerForm;
