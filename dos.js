/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
 
  var marca; 
  var precio;
  var peso;
  var tipo; 
  var respuesta;
  var acumuladorPeso = 0;
  var pesoTotal;
  var flagCaro = 0;
  var marcaMasCara;
  var precioMasAlto;
  var flagMasLiviano = 0;
  var marcaMasLiviano;
  var pesoMasLiviano;

  do{

    marca = prompt("Ingrese la marca del producto");

    precio = parseFloat(prompt("Ingrese el precio del producto"));
    while(isNaN(precio)){
      precio = parseFloat(prompt("Error. Ingrese un número válido"));
    }

    peso = parseInt(prompt("Ingrese el peso del producto en kilogramos"));
    while(isNaN(peso)){
      peso = parseInt(prompt("Error. Ingrese un número válido"));
    }

    tipo = prompt("El producto que desea comprar ¿es solido o líquido?");
    while(tipo != "solido" && tipo != "liquido"){
      tipo = prompt("Error. Coloque 'solido' o 'liquido'");
    }

    switch(tipo){
      case "liquido":
        if(flagCaro == 0 || precioMasAlto < precio){
          flagCaro = 1;
          precioMasAlto = precio;
          marcaMasCara = marca;
        }
      break;
      case "solido":
        if(flagMasLiviano == 0 || pesoMasLiviano > peso){
          flagMasLiviano = 1;
          pesoMasLiviano = peso;
          marcaMasLiviano = marca;
        }
    }

   

    acumuladorPeso = acumuladorPeso + peso;

    respuesta = confirm("¿Desea seguir añadiendo productos a la compra?");
  } while(respuesta);

  pesoTotal = acumuladorPeso;

  //Punto A: 
  console.log("El peso total es de: " + pesoTotal);
  //Punto B:
  if(flagCaro == 0){
    console.log("No se compraron productos líquidos");
  } else {
    console.log("La marca del mas caro de los líquidos es: " + marcaMasCara);
  }
 
  //Punto C:
  if(flagMasLiviano == 0){
    console.log("No se compraron productos sólidos");
  } else {
    console.log("La marca del más liviano de los sólidos es: " + marcaMasLiviano);
  }
 

}
