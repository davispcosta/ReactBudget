import React, {Component} from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit();
    }

    handleChange = (event) => {
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        return (
            <div className="add">
                <form onSubmit={this.handleSubmit} className="add__container">
                    <select className="add__type"
                        value={this.props.type}
                        name="type"
                        onChange={this.handleChange}>
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>

                    <input type="text"
                        className="add__description"
                        placeholder="Add description"
                        value={this.props.description}
                        name="description"
                        onChange={this.handleChange}></input>

                    <input type="number"
                        className="add__value"
                        placeholder="Value"
                        value={this.props.value}
                        name="value"
                        onChange={this.handleChange.bind(this)}></input>

                    <button className="add__btn"><i className="ion-ios-checkmark-outline"></i></button>
                </form>
            </div>
        );
    }
}

export default Form;