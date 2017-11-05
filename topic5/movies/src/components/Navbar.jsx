import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render(){
		return(
			<nav>
				<Link className="home" to="/">
					<p>Home</p>
				</Link>
				<Link className="favs" to="/movies">
					<p>Favorite movies</p>
				</Link>
				<Link className="create" to="/">
					<p>Create</p>
				</Link>
			</nav>
		);

	}
}

export default Navbar;