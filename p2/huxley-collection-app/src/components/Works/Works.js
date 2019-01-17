import React, { Component } from 'react';
import './Works.css';
import axios from 'axios'
require('dotenv').config()

const parseString = require('xml2js').parseString

const GOODREADS_TOKEN = process.env.REACT_APP_GOODREADS_ACCESS_TOKEN
const GR_URL = `https://www.goodreads.com/author/list/3487.Aldous_Huxley?page=1&per_page=50&key=${GOODREADS_TOKEN}`

class Works extends Component {
  constructor(props){
    super(props)

    this.state = {
      books: []
    }
    this.fetchBooks = this.fetchBooks.bind(this)
    this.getTitleAndCover = this.getTitleAndCover.bind(this)
  }

  async fetchBooks(){
    let response = await axios(GR_URL)

    parseString(response.data, (err, result) => {
      console.dir(result.GoodreadsResponse.author[0].books[0].book)
      
      const gr_json_books = result.GoodreadsResponse.author[0].books[0].book

      this.setState({
        books: gr_json_books
      })
      //consider moving map to another method
    })
  }

  getTitleAndCover(){
    return this.state.books.map(book => {
      return(
        <div>
          <h2>{book.title[0]}</h2>
          <img src={book.image_url[0]} alt='book cover' />
        </div>
      )
    })
  }



  componentDidMount(){
    this.fetchBooks()
  }

  render() {

    return (
      <div className='book-container'>
        {this.getTitleAndCover()}     
      </div>
    )
  }
}

export default Works;
