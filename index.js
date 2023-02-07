const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero')
const botonesOperaciones = document.querySelectorAll('.operador');
const botonDelete = document.querySelectorAll('.delete');

let display = valorActual + valorAnterior

const newDisplay = new display (displayValorAnterior, displayValorActual);


botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero('valor-actual'.innerHTML));
});


let resultado = null;

function agregarNumero(numero) {
    if (numero === '.' && 'valor-actual'.includes('.')) return
    displayValorActual = 'valor-actual'.toString() + numero.toString();
    imprimirValores();
}

function imprimirValores() {
    
}


function sumar (numero1, numero2) {
    resultado = numero1 + numero2;
    console.log(sumar);
    document.getElementById("valor-actial").innerHTML = resultado;
}

function restar (numero1, numero2) {
    resultado = numero1 - numero2;
}

function multiplicar (numero1, numero2) {
    resultado = numero1 * numero2;
}

function dividir (numero1, numero2) {
    resultado = numero1 / numero2;
}

//function delete() {
//    displayValorActual
//}