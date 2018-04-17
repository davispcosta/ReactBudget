import React, { Component } from 'react';
import './App.css';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Form from './components/Form/Form';
import IncomeList from './components/IncomeList/IncomeList';
import ExpenseList from './components/ExpenseList/ExpenseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderInfo />
        <div className="bottom">
          <Form />
          <div className="container clearfix">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
