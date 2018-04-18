import React from 'react';
import IncomeCard from '../IncomeCard/IncomeCard';

const IncomeList = (props) => {

    function getIncomes() {
        var components = props.list.map( (item) => {
            return <IncomeCard key={item.id} description={item.description} value={item.value}  />
        })
        return components;
    }

    return(
        <div className="income">
            <h2 className="icome__title">Income</h2>

            <div className="income__list">
                { getIncomes() }
            </div>
        </div>
    );
}

export default IncomeList;