import React from 'react';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ExpenseList = (props) => {

    function getExpenses() {
        var components = props.list.map( (item) => {
            return <ExpenseCard key={item.id} description={item.description} value={item.value} porcentage="15%"/>
        })
        return components;
    }

    return(
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>

            <div className="expenses__list">
                { getExpenses() }
            </div>
        </div>
    );
}

export default ExpenseList;