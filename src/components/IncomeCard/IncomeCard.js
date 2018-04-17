import React from 'react';

const IncomeCard = (props) => {

    return (
        <div className="item clearfix" id="income-${infos.index}">
            <div className="item__description"> {props.description} </div>
            <div className="right clearfix">
                <div className="item__value">{props.value}</div>
                <div className="item__delete">
                    <button className="item__delete--btn income-btn-${infos.index}"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    );
}

export default IncomeCard;