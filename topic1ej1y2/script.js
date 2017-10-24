        $(document).ready(function(){
            $("#hidden").fadeIn(2000); //ejercicio 1
        });

        $(document).ready(function() {
        	$('#alert').on( "click", function(evt) {//ejercicio 2
        		alert("I'm an alert");
        		evt.stopImmediatePropagation();//evita que el onclick suceda 2 veces
        	});
        	
        });