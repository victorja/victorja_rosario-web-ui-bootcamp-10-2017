    $(document).ready(function(){
    	$("#hidden").fadeIn(2000); 
    });


//ejercicio 3.2
const jokeGetter = {
	method: "GET",
	api: "http://api.icndb.com/jokes/random",
	syncType: true //true para async, falso para sync
};

function getPromise(config){
	return new Promise(function(resolve,reject){
		var http = new XMLHttpRequest();
		http.open(config.method,config.api,config.syncType);
		http.onload = function(){
			if(http.readyState == 4 && http.status == 200){
				resolve(JSON.parse(http.response));
			}else{
				reject("Error loading the joke");
			}
		};
		http.onerror = function(){//toma una callback function a ejecutar si hay error
			reject("Error loading the joke");
		};
		http.send();
	});
};


function tellJoke(){
var promise = getPromise(jokeGetter); //tomo promesa de la api jokeGetter
promise.then(function(jokes){
	let list = document.getElementById("appendable");
	if(list.childNodes.length > 1){list.removeChild(list.childNodes[1]);} //si hay impreso un mensaje lo borra
	list.innerHTML += jokes.value.joke;
}).catch(function(error){
	let list = document.getElementById("appendable");
	if(list.childNodes.length > 1){list.removeChild(list.childNodes[1]);} //si hay impreso un mensaje lo borra
		var sheet = window.document.styleSheets[0];
		sheet.insertRule('.errRed { color: red; }', sheet.cssRules.length);
		document.getElementById("appendable").innerHTML += "<p class=\"errRed\">"+"Error loading the joke"+"</p>"; //mensaje status error
});
};
