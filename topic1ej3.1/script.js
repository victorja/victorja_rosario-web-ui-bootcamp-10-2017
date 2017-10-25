    $(document).ready(function(){
    	$("#hidden").fadeIn(2000); 
    });

//ejercicio 3
function jokeGetter(){
	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){

		if(http.readyState == 4 && http.status ==200){//si esta todo OK
			var myObj = JSON.parse(http.response);
			var list = document.getElementById("appendable");
				if(list.childNodes.length >1){list.removeChild(list.childNodes[1]);}//si hay impreso un mensaje lo borra
				list.innerHTML += myObj.value.joke;

			}else if(http.status == 403 || http.status == 404){//mensajes de error
				document.getElementById("appendable").innerHTML += "<p style=\"color:red;\">"+"Error loading the joke"+"</p>"; //mensaje status error
			}
		}

		http.open("GET", "http://api.icndb.com/jokes/random",true);
		http.send();

	};
