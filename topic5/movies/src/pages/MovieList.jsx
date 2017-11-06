import React,{Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import AddComponent from '../components/AddComponent.jsx';

class MovieList extends Component {
	render(){
		return (
			<div>
				<Navbar />
				<h4>This is the movie list</h4>
				<AddComponent />
			</div>
		);
	}
}

export default MovieList;