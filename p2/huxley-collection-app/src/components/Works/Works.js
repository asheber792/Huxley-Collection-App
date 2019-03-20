import React, { Component } from 'react';
import './Works.css';
import axios from 'axios'
import { Redirect } from 'react-router';

require('dotenv').config()

const parseString = require('xml2js').parseString

const GOODREADS_TOKEN = process.env.REACT_APP_GOODREADS_ACCESS_TOKEN
const GR_URL = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/list/3487.Aldous_Huxley?page=1&per_page=51&key=${GOODREADS_TOKEN}`

class Works extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: null, 
      books: []
    }

    this.fetchBooks = this.fetchBooks.bind(this)
    this.getTitleAndCover = this.getTitleAndCover.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  async fetchBooks(){
    let response = await axios(GR_URL)

    parseString(response.data, (err, result) => {
      const gr_json_books = result.GoodreadsResponse.author[0].books[0].book

      this.setState({
        books: gr_json_books
      })
    })
  }

  getTitleAndCover(){
    return this.state.books.map(book => {
      return(
        <div key={book.id[0]._ } className='book-container'>
          <p className='book-title'>{book.title[0]}</p>
          <img id={book.id[0]._} src={book.image_url[0]} alt='book cover' className='book-cover' onClick={this.handleClick} />
        </div>
      )
    })
  }

  handleClick(evnt){
    this.setState({
      id: evnt.target.id,
      redirect: true
    });
  }

  componentDidMount(){
    this.fetchBooks()
  }

  render() {
    if (this.state.redirect) {
      return(
        <Redirect 
          push to={{
            pathname:`/book-info/${this.state.id}`,
            state: { books: this.state.books }
          }} />
      )
    }

    return (
      <div>
        <div className='books-container'>
          {this.getTitleAndCover()}     
        </div>
      </div> 
    )
  }
}

export default Works;
