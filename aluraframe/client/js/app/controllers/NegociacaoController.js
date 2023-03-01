class NegociacaoController {

    adiciona(event) {
        event.preventDefault();
        
        // O método .bind criar uma função que o seu this tem referência ao atributo fornecido
        // Nes caso, a variável $ mantem a associação ao document
        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQunatidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQunatidade.value);
        console.log(inputValor.value);
    };
};