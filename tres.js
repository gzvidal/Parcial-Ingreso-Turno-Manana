/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var nombreTitular;
	var lugar;
	var temporada;
	var cantidadPersonas;
	var respuesta;
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var lugarMasElegido;
	var flagMasPasajeros = 0;
	var nombreMasPasajeros; 
	var masPasajeros;
	var acumuladorPersonas = 0; 
	var contadorViajeInvierno = 0;
	var promedioPersonasInvierno;

	//Inicio de la toma de datos 

	do{

		nombreTitular = prompt("Ingrese el nombre del titular por favor");

		lugar = prompt("Ingrese el destino elegido entre: 'bariloche' 'cataratas' o 'salta");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
			lugar = prompt("Error. Ingrese el destino elegido entre: 'bariloche' 'cataratas' o 'salta");
		}

		temporada = prompt("Ingrese la estación del año en la que desea viajar");
		while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
		temporada = prompt("Error. Elija entre 'otoño','invierno','primavera' o 'verano'");
		}

		cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas que viajan"));
		while(isNaN(cantidadPersonas)){
		cantidadPersonas = parseInt(prompt("Ingrese un número válido por favor"));
		}

		switch(lugar){
			case "bariloche":
			contadorBariloche++;
			break;
			case "cataratas":
			contadorCataratas++;
			break;
			case "salta":
			contadorSalta++;
			break;
		}

		if(flagMasPasajeros == 0 || masPasajeros < cantidadPersonas){
			flagMasPasajeros = 1;
			masPasajeros = cantidadPersonas;
			nombreMasPasajeros = nombreTitular;
		}

		if(temporada == "invierno"){
			contadorViajeInvierno++;
			acumuladorPersonas = acumuladorPersonas + cantidadPersonas;
		}

		respuesta = confirm("¿Desea seguir ingresando datos?");
	} while (respuesta);

	// Fin de la toma de datos

	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarMasElegido = "bariloche";
	} else {
		if(contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
			lugarMasElegido = "cataratas";
		} else {
			lugarMasElegido = "salta";
		}
	}

	promedioPersonasInvierno = acumuladorPersonas / contadorViajeInvierno;

	//Punto A: 
	console.log("El lugar más elegido es: " + lugarMasElegido);

	//Punto B: 
	console.log("El nombre del titular que lleva más pasajeros es: " + nombreMasPasajeros);

	//Punto C: 
	console.log("El promedio de las personas que viajaron en invierno es: " + promedioPersonasInvierno);
}
