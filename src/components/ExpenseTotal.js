import React, { useContext } from 'react';
import { AppContext,changeFactors } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{Number.parseFloat(totalExpenses/changeFactors[currency]).toFixed(2)}</span>
        </div>
    );
};
export default ExpenseTotal;
