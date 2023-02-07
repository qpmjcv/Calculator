class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.ValorActual = '';
        this.ValorAnterior = '';
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.ValorActual = this.ValorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.innerHTML = this.valorActual;
        this.displayValorAnterior.innerHTML = this.valorAnterior;
    }
}

