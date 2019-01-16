import React, { Component } from 'react';
import './Works.css';
import axios from 'axios'
require('dotenv').config()

const GOODREADS_TOKEN = process.env.REACT_APP_GOODREADS_ACCESS_TOKEN
const GR_URL = `https://www.goodreads.com/author/list/3487.Aldous_Huxley?page=1&per_page=50&key=${GOODREADS_TOKEN}`

class Works extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: '', 
      coverURL: null
    }
    this.fetchBooks = this.fetchBooks.bind(this)
  }

  async fetchBooks(){
    let response = await axios(GR_URL)
    console.log(response.data)
    this.setState({
       title: 'dsdsf',
       coverURL: "dsjfsdj"
    });
  }

  componentDidMount(){
    this.fetchBooks()
  }

  render() {
    return (
      <div className='quote'>
        <h1>sdfjdsfmasdkf</h1>
        <img src='' />
      </div>
    );
  }
}

export default Works;
