let numAleatorioUno = prompt("Ingrese un número del 1 al 10");
let numAleatorioDos = prompt("Ingrese un segundo número del 1 al 10");
let numAleatorioTres = prompt("Ingrese un tercer número del 1 al 10");

if ((numAleatorioUno == numAleatorioDos) && (numAleatorioUno == numAleatorioTres)) {
    document.write("¡Felicidades ha ganado el primer premio!");
}else if((numAleatorioUno == numAleatorioDos) || (numAleatorioUno == numAleatorioTres) || (numAleatorioDos == numAleatorioTres)){
    document.write("¡Felicidades ha ganado el segundo premio!");
}else{
    document.write("Felicidades, ganaste un helado");
}