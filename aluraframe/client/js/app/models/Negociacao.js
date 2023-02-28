class Negociacao {

    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
        // O método freeze congela o objeto impedindo sua alteração
        // É um comando shallow, ou seja, ele ficará na superfície não congela objetos que são atribuidos ao
        // atributo da classe
        Object.freeze(this);
    }

    get data() {
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get valor() {
        return this.#valor
    }

    get volume() {

        return this.#quantidade * this.#valor;
    }

}