import React, {Component} from 'react';


class Movie extends Component{
	render(){
		return(
			<div>
				{this.props.text}
				<button onClick={this.props.deleteMethod}>X</button>
			</div>
		);
	}
}

export default Movie;