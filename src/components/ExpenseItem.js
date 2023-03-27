import React, { useContext } from 'react';
import { TiDelete,TiPlus } from 'react-icons/ti';
import { AppContext,changeFactors } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{Number.parseFloat(props.cost/changeFactors[currency]).toFixed(2)}</td>
        <td style={{paddingLeft:"1.2cm"}}><TiPlus style={{backgroundColor:"#72d8db" , borderRadius:"50%"}} size='1.8em' onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
        <td style={{paddingLeft:"0.5cm"}}><TiDelete style={{backgroundColor:"#d45057" , borderRadius:"50%"}} size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
