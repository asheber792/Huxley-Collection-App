import React, { Component } from 'react';
import './Quotes.css';
import axios from 'axios'

const URL='https://goodquotesapi.herokuapp.com/author/aldous+huxley?page=2'

class Quotes extends Component {
  constructor(props){
    super(props)

    this.state = {
      quote: 'Loading Quotes...',
      publication: 'Loading Publication'
    }
    this.fetchQuotes = this.fetchQuotes.bind(this)
  }

  fetchQuotes(){
    axios.get(URL)
    .then((response) => {
       let randomNum = Math.floor(Math.random() * 20)
       const randomQuote = response.data.quotes[randomNum].quote
       const matchingPub = response.data.quotes[randomNum].publication
      this.setState({
        quote: randomQuote,
        publication: matchingPub
      });
    })
    .catch((error) => {
      console.error("Error: ", error)
    });
  }

  componentDidMount(){
    this.fetchQuotes()
    setInterval(() => {
      this.fetchQuotes()
    }, 5000)
  }

  render() {
    return (
      <div className='quote'>
        <h1>{this.state.quote}</h1>
        <sub>
          {this.state.publication != null ? `-${this.state.publication}` : "-Unknown Publication"}
        </sub>
      </div>
    );
  }
}

export default Quotes;
