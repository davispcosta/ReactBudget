import React from 'react';

const HeaderInfo  = (props) => {

    return(
        <div className="top">
            <div className="budget">

                <div className="budget__value">{ props.income - props.expense}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">{ props.income }</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">{ props.expense }</div>
                        <div className="budget__expenses--percentage">{ props.porcentage }%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo;