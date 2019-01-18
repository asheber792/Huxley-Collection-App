import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from '../Header/Header'
import Quotes from '../Quotes/Quotes'
import Works from '../Works/Works'
import BookInfo from '../BookInfo/BookInfo'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className='main-content'>
        	<Route path="/" exact component={Quotes} />
        	<Route path="/home" component={Quotes} />
        	<Route path="/collected-works" component={Works} />
        	<Route path="/book-info/:id" component={BookInfo} />
        </main>
      </div>
    );
  }
}

export default App;
