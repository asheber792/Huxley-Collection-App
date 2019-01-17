import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import Header from '../Header/Header'
import Quotes from '../Quotes/Quotes'
import Works from '../Works/Works'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
        	<Redirect from="/" to="/home" />
        	<Route path="/home" component={Quotes} />
        	<Route path="/collected-works" component={Works} />
        </main>
      </div>
    );
  }
}

export default App;
