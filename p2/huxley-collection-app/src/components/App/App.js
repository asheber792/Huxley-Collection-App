import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import Header from '../Header/Header'
import Quotes from '../Quotes/Quotes'
import Works from '../Works/Works'
import BookInfo from '../BookInfo/BookInfo'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
        	<Redirect from="/" to="/home" />
        	<Route path="/home" component={Quotes} />
        	<Route path="/collected-works" component={Works} />
        	<Route path="/book-info/:id" component={BookInfo} />
        </main>
      </div>
    );
  }
}

export default App;
