var githubGetter = {
	method: "GET",
	api: "https://api.github.com/search/repositories?q=javascript",
syncType: true //true para async, falso para sync
};



function getPromise(config){
	return new Promise(function(resolve,reject){
		var http = new XMLHttpRequest();
		http.open(config.method,config.api,config.syncType);
		http.onload = function(){
			if(http.readyState == 4 && http.status == 200){
				resolve(JSON.parse(http.response));
			}else if(http.status ==403 || http.status ==404){
				reject(http.statusText);
			}
		};
	http.onerror = function(){//toma una callback function a ejecutar si hay error
		reject(http.statusText);
	};
	http.send();
});
};


function getSubmit(){
event.preventDefault();//previene el comportamiento por default de submit button
setUrlToDefault(githubGetter);//"limpia" la url de busquedas pasadas
var search =  githubGetter;
search["api"] += "+" + document.getElementById("searchVal").value;
let promise = getPromise(search);

promise.then(function(result){
	let place = document.getElementById("searchResults");
		place.innerHTML = ''; //limpia la busqueda, vaciando el innerHTML
		for(let i=0;i<10;i++){
			place.innerHTML += "<li><a href='"+ result.items[i].html_url + "' target='_blank' >" + result.items[i].name + "</a></li>"
		}

	}).catch(function(error){
		let compare = error.toString().slice(0,9); //corta los 9 primeros caracteres, serian los de TypeError, para comparar en el if
			if(compare === "TypeError"){error="No more matches found.";};//si es error de tipo TypeError lo atrapa y cambia el mensaje
		let sheet = window.document.styleSheets[0];
		sheet.insertRule('.errRed { color: red; }', sheet.cssRules.length);
		document.getElementById("searchResults").innerHTML += "<li class=\"errRed\">"+ error +"</li>";
	});
};



function setUrlToDefault(apiObj){
	let index = apiObj["api"].indexOf("+");
	let defaultUrl = "";
		if(index === -1){return;};//-1 significa que no posee "+", la url(api) esta en default
	defaultUrl = apiObj["api"].substr(0,index);
	apiObj["api"] = defaultUrl;
	return;
	};