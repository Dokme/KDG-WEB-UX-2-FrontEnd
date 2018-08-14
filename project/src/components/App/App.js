import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import List from '../List/List';
import ItemDetail from '../List/Listitemdetail';
import Add from '../Add/Add';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='*' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/list' component={List} />
        <Route exact path='/list/:id' component={ItemDetail} />
        <Route exact path='/add' component={Add} />
      </div>
    );
  }
}

export default App
