import React from 'react';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ExpenseList = (props) => {

    var handleDelete = (key) => {
        props.onClick(key, "exp");
    }

    return(
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>

            <div className="expenses__list">
                { props.list.map( (item) => {
                    return <ExpenseCard 
                    key={item.id}
                    index={item.id}
                    description={item.description} 
                    value={item.value} 
                    porcentage={item.porcentage}
                    onClick={handleDelete} /> 
                    }) 
                }
            </div>
        </div>
    );
}

export default ExpenseList;