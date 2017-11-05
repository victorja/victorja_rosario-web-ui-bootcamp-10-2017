import React,{Component} from 'react';
import Movie from './Movie.jsx';


class AddComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
            movieText: '',
            movies: [],
		};
	}

updateMovieText(movieText){
    this.setState({movieText: movieText.target.value})
}

addMovie(){
    if(this.state.movieText === ''){return}

    let moviesArr = this.state.movies;
    moviesArr.push(this.state.movieText);
    this.setState({movieText: ''})
    this.textInput.focus();
}

handleKeyPress = (event) => {//enables to add when pressing enter on keyboard
    if(event.key === 'Enter'){
    let moviesArr = this.state.movies;
    moviesArr.push(this.state.movieText);
    this.setState({movieText: ''})
    }
}

deleteMovie(index) {
    let movieArr = this.state.movies;
    movieArr.splice(index,1);//remove the movie from array
    this.setState({movies: movieArr})
}


	render(){
        let movie = this.state.movies.map((val,key)=> {//prints on screen list of movies see line55
            return <Movie 
            key={key} 
            text={val} 
            deleteMethod={() => this.deleteMovie(key)}
            
             />
        });

		return (
			<div>
				<input type="text"
                    ref={((input)=>{this.textInput = input;})}
                    className="textInput"
					value={this.state.movieText}
                    onChange={movieText => this.updateMovieText(movieText)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    />
				<button onClick={this.addMovie.bind(this)}>Add</button>
                {movie}
			</div>
		);
	}
}

export default AddComponent;