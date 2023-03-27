import React, { useContext } from 'react';
import { AppContext,changeFactors} from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{Number.parseFloat((budget - totalExpenses)/changeFactors[currency]).toFixed(2)}</span>
        </div>
    );
};
export default Remaining;


