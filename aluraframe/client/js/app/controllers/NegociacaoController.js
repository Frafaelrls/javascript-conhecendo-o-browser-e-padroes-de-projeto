class NegociacaoController {

    #inputData;
    #inputQunatidade;
    #inputValor;

    constructor() {
        // O método .bind criar uma função que o seu this tem referência ao atributo fornecido
        // Nes caso, a variável $ mantem a associação ao document
        let $ = document.querySelector.bind(document);

        this.#inputData = $('#data');
        this.#inputQunatidade = $('#quantidade');
        this.#inputValor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();

        let helper = new DateHelper()

        let negociacao = new Negociacao(
            helper.textoParaData(this.#inputData.value),
            this.#inputQunatidade.value,
            this.#inputValor.value
        );

        console.log(negociacao);

        console.log(helper.dataParaTexto(negociacao.data));
    };
};