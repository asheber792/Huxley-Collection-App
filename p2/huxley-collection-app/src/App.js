import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><h1>HOME</h1></li>
              <li><h1>COLLECTED WORKS</h1></li>
            </ul>
          </nav>
        </header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
