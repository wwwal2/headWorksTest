import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar, Author, ItemsList, Details } from './Components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={ItemsList} />
          <Route path="/details" exact component={Details} />
          <Route path="/author" exact component={Author} />     
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
