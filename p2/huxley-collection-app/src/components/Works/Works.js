import React, { Component } from 'react';
import './Works.css';
import axios from 'axios'
import BookInfo from '../BookInfo/BookInfo'
import { Redirect } from 'react-router';

require('dotenv').config()

const parseString = require('xml2js').parseString

const GOODREADS_TOKEN = process.env.REACT_APP_GOODREADS_ACCESS_TOKEN
const GR_URL = `https://www.goodreads.com/author/list/3487.Aldous_Huxley?page=1&per_page=50&key=${GOODREADS_TOKEN}`

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
      console.dir(result.GoodreadsResponse.author[0].books[0].book)
      
      const gr_json_books = result.GoodreadsResponse.author[0].books[0].book

      this.setState({
        books: gr_json_books
      })
    })
  }

  getTitleAndCover(){
    return this.state.books.map(book => {
      return(
        <div key={book.id[0]._}>
          <h2>{book.title[0]}</h2>
          <img id={book.id[0]._} src={book.image_url[0]} alt='book cover' onClick={this.handleClick} />
        </div>
      )
    })
  }

  handleClick(evnt){
    //consider redirect with react router
    console.log(this.props.match)
    console.log(evnt.target.id)

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
        <Redirect push to={`/book-info/${this.state.id}`} />
      )
    }

    return (
      <div>
        <div className='book-container'>
          {this.getTitleAndCover()}     
        </div>
      </div> 
    )
  }
}

export default Works;
