import React, {Component} from 'react';
import './BookInfo.css';

class BookInfo extends Component{
	constructor(props){
		super(props)
		this.state = {

		}

	}

	componentDidMount(){

	}

	render(){
		console.log(this.props.match.params.id)
		return(
		  	<div>
		  		<h1>Title: {this.props.title}</h1> 
		  		<img src={this.props.cover} />
		  		<h6>Publication Year: {this.props.year}</h6>
		  		<p>Average Rating: {this.props.rating}</p>
		  		<p>Description: <br /> {this.props.description}</p> 
		  	</div>   
		  )
	}
}

export default BookInfo