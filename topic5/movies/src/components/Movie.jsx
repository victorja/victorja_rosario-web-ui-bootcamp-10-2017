import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
	constructor(props){
		super(props);
		this.state= {
			inputValue: ''
		};
	}
	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value
		});
	}

	render(){
		return(
			<div className="box">
				{this.props.text}
				<button onClick={this.props.deleteMethod}>X</button>
				<input value={this.props.newMovieName} 
					onChange={evt => this.updateInputValue(evt)}
					className="editInputBox"
				/> 
				<button onClick={() => this.props.editMethod(this.state.inputValue)}>edit</button>
                
                
			</div>
		);
	}
}

export default Movie;