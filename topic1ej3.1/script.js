    $(document).ready(function(){
        $("#hidden").fadeIn(2000); //ejercicio 1
    });


function jokeGetter(){//ejercicio 3
	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){

		if(http.readyState == 4 && http.status ==200){//si esta todo OK
			var myObj = JSON.parse(http.response);
			document.getElementById("appendable").innerHTML += myObj.value.joke;

		}else if(http.status == 403 || http.status == 404){
			document.styleSheets[1].insertRule("#appendable { color: red }", 0);//si tira error lo devuelvo en rojo
			var myErr = JSON.parse(http.status);
			document.getElementById("appendable").innerHTML += http.statusText; //mensaje status error
		}
	}

	http.open("GET", "http://api.icndb.com/jokes/random",true);
	http.send();

};