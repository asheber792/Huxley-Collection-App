import React, { Component } from 'react';
import './Quotes.css';
import axios from 'axios'

const GQ_URL='https://goodquotesapi.herokuapp.com/author/aldous+huxley?page=2'

class Quotes extends Component {
  constructor(props){
    super(props)

    this.state = {
      quote: 'Loading Quotes...',
      publication: 'Loading Publication',
      init: true
    }
    this.fetchQuotes = this.fetchQuotes.bind(this)
  }

  async fetchQuotes(){
    let response = await axios(GQ_URL)
    let randomNum = Math.floor(Math.random() * 20)
    const randomQuote = response.data.quotes[randomNum].quote
    const matchingPub = response.data.quotes[randomNum].publication
    this.setState({
      quote: randomQuote,
      publication: matchingPub, 
    });
  }

  componentDidMount(){
    this.fetchQuotes()
    setInterval(() => {
      this.fetchQuotes()
    }, 5000)
  }

  componentWillUnmount(){ 
    clearInterval(() =>{
      this.fetchQuotes()
    })
  }

  render() {
    return (
      <div className='quote-container'>
        <div className='quote'>
          <img src="../../images/huxley_sig.png" />
          <h2>{this.state.quote}</h2>
          <br />
          <small className='publ'>
            {this.state.publication != null ? `- ${this.state.publication}` : "- Unknown Publication"}
          </small>
        </div>
      </div>
    );
  }
}

export default Quotes;
