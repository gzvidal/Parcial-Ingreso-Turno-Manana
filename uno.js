/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	//declarar variables 

	var nombre;
	var temperatura;
	var sexo;
	var edad; 
	var contador;
	var cantidadMujeres = 0;
	var cantidadHombres = 0;
	var contadorPersonas = 0;
	var edadTotal = 0;
	var edadPromedio;
	var flagTemperatura = 0;
	var temperaturaMaxima;
	var nombreMujerConTemperatura;

	//tomar datos 

	for(contador = 0; contador < 3 ; contador++){

		nombre = prompt("Ingrese el nombre del paciente"); 

		temperatura = parseFloat(prompt("Ingrese la temperatura del paciente"));
		while(isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error. Ingrese una temperatura válida"));
		}

		sexo = prompt("Ingrese el sexo del paciente");
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error. Por favor, ingrese 'f' para femenino o 'm' para masculino.'");
		}
		
		edad = parseInt(prompt("Ingrese la edad del paciente"));
		while(isNaN(edad)){
			edad = parseInt(prompt("Error. Ingrese la edad del paciente"));
		}

		switch(sexo){
			case "f":
			contadorPersonas++;
			cantidadMujeres++;
			if(flagTemperatura == 0 || temperaturaMaxima < temperatura){
				flagTemperatura = 1;
				temperaturaMaxima = temperatura;
				nombreMujerConTemperatura = nombre;
			}
			break;
			case "m":
			contadorPersonas++;
			cantidadHombres++;
			break;
		}

		edadTotal = edadTotal + edad;
	}
	
	edadPromedio = edadTotal / contadorPersonas;

	//Punto A: 
	console.log("Hombres: " + cantidadHombres + ". Mujeres: " + cantidadMujeres);
	//Punto B: 
	console.log("El promedio de edad total es: " + edadPromedio);
	//Punto C: 
	if(cantidadMujeres == 0){
		console.log("No se ingresó ninguna mujer");
	} else {
		console.log("La mujer con más temperatura se llama: " + nombreMujerConTemperatura);
	}
}
