import React,{Component} from 'react';

import Navbar from '../components/Navbar.jsx';

class Home extends Component {
	render(){
		return (
			<div>
				<Navbar/>
				<h3>
				Welcome to movie list home
				</h3>
				<article>
				You can see my fav movies, add/delete/edit as you please.
				</article>
			</div>
		);
	}
}

export default Home;