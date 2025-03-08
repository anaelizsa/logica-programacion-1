
let numA = prompt("Ingresa tu primer número: ");
while (isNaN(parseInt(numA))|| numA === ""){
    alert("Por favor, ingrese un número válido.");
    numA = prompt("Ingresa tu primer número: ")
}
let numB = parseInt(prompt("Ingresa tu segundo número: "));
while (isNaN(parseInt(numB))|| numB === ""){
    alert("Por favor, ingrese un número válido.");
    numB = prompt("Ingresa tu segundo número: ")
}
let numC = parseInt(prompt("Ingresa tu tercer número: "));
while (isNaN(parseInt(numC))|| numC === ""){
    alert("Por favor, ingrese un número válido.");
    numC = prompt("Ingresa tu tercer número: ")
}
numA = parseInt(numA);
numB = parseInt(numB);
numC = parseInt(numC);


const numberArray = [numA,numB,numC];
const numberArrayAc = [...numberArray].sort((a, b) => a - b); 
const numberArrayDc = [...numberArray].sort((a, b) => b - a);
console.log("Orden Ascendente:", numberArrayAc);
console.log("Orden Descendente:", numberArrayDc);

const numMenor = numberArrayAc[0];
const numMedio = numberArrayAc[1];
const numMayor = numberArrayAc[2];



const body = document.querySelector("body");

const headline = document.createElement("h1")
headline.innerText = "Analisis de Números";

const numeros = document.createElement("h2")
numeros.innerText = "Estos son tu números: " + numberArray;


const numerosAc = document.createElement("h2")
numerosAc.innerText = "Estos son tu números en Orden Ascendente: " + numberArrayAc;

const numerosDc = document.createElement("h2")
numerosDc.innerText = "Estos son tu números en Orden Descendente: " + numberArrayDc;

const mayor = document.createElement("h2")
mayor.innerText = "Este es el número mayor: " + numMayor;

const medio = document.createElement("h2")
medio.innerText = "Este es el número de en medio: " + numMedio;

const menor = document.createElement("h2")
menor.innerText = "Este es el número menor: " + numMenor;

body.append(headline, numeros, numerosAc, numerosDc, mayor, medio, menor)

const numerosIguales = () => {
    let mensaje = "";

    if (numA === numB && numB === numC) {
        mensaje = `Todos los números son iguales: ${numA}`;
    } else {
        if (numA === numB) {
            mensaje += `Tu primer número ${numA} es igual a tu segundo número ${numB}.\n`;
        }
        if (numB === numC) {
            mensaje += `Tu segundo número ${numB} es igual a tu tercer número ${numC}.\n`;
        }
        if (numA === numC) {
            mensaje += `Tu primer número ${numA} es igual a tu tercer número ${numC}.\n`;
        }
    }

    if (mensaje) {
        console.log(mensaje)
        const numerosIgual = document.createElement("h2");
        numerosIgual.innerText = mensaje;
        body.append(numerosIgual);
    }
};

numerosIguales();