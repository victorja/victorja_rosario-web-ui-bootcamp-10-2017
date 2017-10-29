
var Movie = require("./movie.js");
var Actor = require("./actor.js");

let film = new Movie("Harry Potter",2001,120);
film.play();
film.on('play',function(){console.log("PLAYING")});//if you declare an event, it triggers automatically if
//it has the same name of the method
film.pause();
film.play();