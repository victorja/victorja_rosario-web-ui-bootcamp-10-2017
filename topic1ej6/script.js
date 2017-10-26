function newTable(matrix){
	var table = document.createElement("TABLE");
	var body = document.getElementsByTagName("BODY")[0];
	body.appendChild(table);
	var tbody = document.createElement("TBODY");
	table.appendChild(tbody);


	for(var row=0;row<matrix.length;row++){
		var tr = document.createElement("TR");//crea elemento Row
		for(var col=0;col<matrix[row].length;col++){
			var th = document.createElement("TH");
			var textTh = document.createTextNode(String(matrix[row][col]));
			console.log(matrix[row][col]);
			th.appendChild(textTh);
			tr.appendChild(th);
		}
		tbody.appendChild(tr);//Une el Row al Tbody
	}


}


function createRandomArray(row,col){
    //Crea arreglo vacio
    var out=[];
    //asigna el nro de filas
    var outerLength=row;

    //llena las filas(row) con numeros aleatorios
    for(var i=0;i<outerLength;i++){
        //asigna nro de columnas
        var innerLength=col;
        var inner=[];
        for(var j=0;j<innerLength;j++){
            //llena las columnas con nros aleatorios
            inner.push(parseInt(Math.random()*10)+1);
        }
        //agrega las columnas a las filas
        out.push(inner);
    }
    return out;
}

function tester(){
	var arr = createRandomArray(9,7);//cambiar para probar otros valores
	newTable(arr);
	console.log(arr);

}