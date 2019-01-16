import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Header from '../Header/Header'
import Quotes from '../Quotes/Quotes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
        	<Route path="/home" component={Quotes} />
        </main>
      </div>
    );
  }
}

export default App;
