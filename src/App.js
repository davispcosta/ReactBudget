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
      expPorcentage: 0,
      description: '',
      value: 0,
      type: "inc",
      expList: [],
      incList: []
    }
  }

  handleChange = (prop, val) => {
  	this.setState({[prop]:val})
  }

  updatePorcentages = () => {
    console.log(this.state.expense);
    let array = this.state.expList
    for (const expense of array) {
      if(expense.value === this.state.expense) {
        expense.porcentage = 100
      } else {
        expense.porcentage = parseInt((expense.value * 100) / this.state.income);
      }
    }
    let newPorcentage = parseInt((this.state.expense * 100) / this.state.income);
    this.setState(() => {
      return {
        expList: array, 
        expPorcentage: newPorcentage
      }
    });
  }

  handleSubmit = () => {
      var newId
      if(this.state.type === "inc") {
        if(this.state.incList.length !== 0) {
          newId = this.state.incList[this.state.incList.length-1]['id']+1
        } else { newId = 1}

        this.state.incList.push({id: newId, description: this.state.description, value: this.state.value})
        this.setState({
          income: this.state.income + parseFloat(this.state.value)
        });
      } else {
        if(this.state.expList.length !== 0) {
          newId = this.state.expList[this.state.expList.length-1]['id']+1
        } else { newId = 1}
        this.state.expList.push({id: newId, description: this.state.description, value: this.state.value, porcentage: 0})
        this.setState((previousState) => {
          return {
            expense: previousState.expense + parseFloat(this.state.value)
          }
        }, () => { this.updatePorcentages() });
      }
      console.log(this.state.expense);
  }

  handleDelete = (key, type) => {
    var array
    var value
    if(type === "inc") {
      array = this.state.incList;
      
      for(let i=0; i<array.length; i++) {
        if(array[i]['id'] === key) {
          value = array[i]['value']
          array.splice(i, 1);
        }
      }
  
      this.setState({incList: array, income: this.state.income-value });
    } else {
      array = this.state.expList;
      for(let i=0; i<array.length; i++) {
        if(array[i]['id'] === key) {
          value = array[i]['value']
          array.splice(i, 1);
        }
      }
      let newPorcentage = parseInt((this.state.expense * 100) / this.state.income);
      this.setState(() => {
        return { 
          expList: array,
          expPorcentage: newPorcentage
        }
      });
    }
    
  }

  render() {
    return (
      <div className="App">
        <HeaderInfo income={this.state.income} expense={this.state.expense} porcentage={this.state.expPorcentage}/>
        <div className="bottom">

          <Form description={ this.state.description }
          value = { this.state.value }
          type = { this.state.type }
          onChange = { this.handleChange } 
          onSubmit = { this.handleSubmit }/>

          <div className="container clearfix">
            <IncomeList list={this.state.incList} 
            onClick={this.handleDelete}/>
            <ExpenseList list={this.state.expList}
            onClick={this.handleDelete}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
