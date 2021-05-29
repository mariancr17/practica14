//EJERCICIO DE CÁLCULO
function limpiarFormulario(){
	 document.getElementById("miForm").reset();
}
	 var calcular = function(e1){

	 var funcion1 = parseInt(document.getElementById("ecuacion").value);

	 var resultado = funcion1 * 0;

	 alert ("La derivada de una constante siempre es " +resultado);
}


//EJERCICIO DE FÍSICA
function limpiarFormulario(){
	 document.getElementById("miForm").reset();
}
	 var div = function(d, t){
	
 var desplazamiento1 = parseInt(document.getElementById("desplazamiento").value);
 var tiempo1 = parseInt(document.getElementById("tiempo").value);

 var resultado = desplazamiento1 / tiempo1;

 return resultado;
}
