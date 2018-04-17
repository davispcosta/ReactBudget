import React from 'react';
import IncomeCard from '../IncomeCard/IncomeCard';

const IncomeList = () => {

    function getIncomes() {
        var lista = [{id: 1, description: "João", value: 15}, {id: 2, description: "Maria", value: 16}, {id: 3, description: "Ricardo", value: 105}]
        var components = lista.map( (item) => {
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