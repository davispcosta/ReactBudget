import React, { Component } from 'react';
import './App.css';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Form from './components/Form/Form';
import IncomeList from './components/IncomeList/IncomeList';
import ExpenseList from './components/ExpenseList/ExpenseList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      expense: 0,
      description: '',
      value: 0,
      type: "inc",
      expList: [],
      incList: [{id: 1, description: "João", value: 15}, {id: 2, description: "Maria", value: 16}, {id: 3, description: "Ricardo", value: 105}]
    }
  }

  handleChange = (prop, val) => {
  	this.setState({[prop]:val})
  }

  handleSubmit = () => {
    this.setState((prevState) => {
      if(this.state.type == "inc") {
        return prevState.income += parseFloat(this.state.value)
      } else {
        return prevState.expense += parseFloat(this.state.value)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderInfo income={this.state.income} expense={this.state.expense} />
        <div className="bottom">
          <Form description={ this.state.description }
          value = { this.state.value }
          type = { this.state.type }
          onChange = { this.handleChange } 
          onSubmit = { this.handleSubmit }/>
          <div className="container clearfix">
            <IncomeList list={this.state.incList} />
            <ExpenseList list={this.state.expList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
