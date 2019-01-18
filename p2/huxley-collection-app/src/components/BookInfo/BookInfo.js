import React, {Component} from 'react';
import './BookInfo.css';

class BookInfo extends Component{
	constructor(props){
		super(props)
		this.state = {
			id: '',
			books: []
		}
		this.getBookInfo = this.getBookInfo.bind(this)
	}

	componentDidMount(){
		const gr_books = this.props.location.state.books
		const bookId = this.props.match.params.id

		this.setState({
			id: bookId,
			books: gr_books 
		})
	}

	getBookInfo(){
		return this.state.books.map(book =>{
			if(this.state.id === book.id[0]._){
				return(
				  	<div>
				  		<h1>{book.title[0]}</h1> 
				  		<img src={book.image_url[0]} alt='book cover large' />
				  		<p>Total # of Pages: {book.num_pages[0]}</p>
				  		<p>Average Rating: {book.average_rating[0]}</p>
				  		<p dangerouslySetInnerHTML={{__html: `Description: <br />${book.description[0]}`}}></p> 
				  	</div> 
				)
			}
		})
	}

	render(){
		return(
			<div>
				{this.getBookInfo()}
			</div>
		)
	}
}

export default BookInfo