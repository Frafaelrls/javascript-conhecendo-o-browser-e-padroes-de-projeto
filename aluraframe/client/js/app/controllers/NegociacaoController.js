class NegociacaoController {

    constructor() {
        // O método .bind criar uma função que o seu this tem referência ao atributo fornecido
        // Nes caso, a variável $ mantem a associação ao document
        let $ = document.querySelector.bind(document);
        
        this.inputData = $('#data');
        this.inputQunatidade = $('#quantidade');
        this.inputValor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();
        
        
        console.log(this.inputData.value);
        console.log(this.inputQunatidade.value);
        console.log(this.inputValor.value);
    };
};