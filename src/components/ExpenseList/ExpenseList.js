import React from 'react';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ExpenseList = () => {

    function getExpenses() {
        var lista = [{id: 1, description: "João", value: 15}, {id: 2, description: "Maria", value: 16}, {id: 3, description: "Ricardo", value: 105}]
        var components = lista.map( (item) => {
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