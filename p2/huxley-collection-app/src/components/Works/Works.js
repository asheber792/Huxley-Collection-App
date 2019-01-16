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
    let response = await axios.get(GR_URL)
    console.log(response.data)
    this.setState({
       title: '',
      coverURL: ''//response.data.author.books[0].image_url  
    });
  }

  componentDidMount(){
    this.fetchBooks()
  }

  render() {
    return (
      <div className='quote'>
        <h1>dsfjhwdoisgnpodsmgiewndofn</h1>
        <img src='' />
      </div>
    );
  }
}

export default Works;
