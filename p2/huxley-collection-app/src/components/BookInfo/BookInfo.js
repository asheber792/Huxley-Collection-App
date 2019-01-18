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
				  	<div className='book-info-bg'>
				  		<div className='book-info-container'>
				  			<h1 className='book-info-title'>{book.title[0]}</h1> 
				  			<div className='book-info-layout'>
				  				<div className='cover-container'>
				  					<img src={book.image_url[0]} alt='book cover large' className='book-cover-large' />
				  				</div>
				  				<div className='details'>
				  					<p><b># of Pages:</b> {book.num_pages[0]}</p>
							  		<p><b>Average Rating:</b> {book.average_rating[0]}</p>
							  		<p dangerouslySetInnerHTML={{__html: `<b>Description:</b> <br />${book.description[0]}`}}></p>
				  				</div>
				  			</div> 
				  		</div>
				  	</div> 
				)
			}
		})
	}

	render(){
		return(
			<div key={this.state.id}>
				{this.getBookInfo()}
			</div>
		)
	}
}

export default BookInfo