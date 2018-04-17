import React from 'react';

const ExpenseCard = (props) => {

    return(
        <div className="item clearfix" id="expense-${infos.index}">
            <div className="item__description">{props.description}</div>
            <div className="right clearfix">
                <div className="item__value">- {props.value}</div>
                <div className="item__percentage">{props.porcentage}</div>
                <div className="item__delete">
                    <button className="item__delete--btn expense-btn-${infos.index}"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    );
}

export default ExpenseCard;