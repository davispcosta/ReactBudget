import React from 'react';

const IncomeCard = (props) => {

    var handleDelete = (event) => {
        props.onClick(props.index);        
    }

    return (
        <div className="item clearfix" id={props.index}>
            <div className="item__description"> {props.description} </div>
            <div className="right clearfix">
                <div className="item__value">{props.value}</div>
                <div className="item__delete">
                    <button onClick={handleDelete} className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    );
}

export default IncomeCard;