import React from 'react';
import IncomeCard from '../IncomeCard/IncomeCard';

const IncomeList = (props) => {

    var handleDelete = (key) => {
        props.onClick(key, "inc");
    }

    return(
        <div className="income">
            <h2 className="icome__title">Income</h2>

            <div className="income__list">
                { props.list.map( (item) => {
                    return <IncomeCard 
                    key={item.id}
                    index={item.id}
                    description={item.description} 
                    value={item.value}
                    onClick={handleDelete}  />
                    }) 
                }
            </div>
        </div>
    );
}

export default IncomeList;