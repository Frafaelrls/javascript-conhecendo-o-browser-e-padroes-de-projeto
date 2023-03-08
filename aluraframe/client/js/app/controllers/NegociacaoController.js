class NegociacaoController {

    // Atributos privados
    #inputData;
    #inputQunatidade;
    #inputValor;
    #listaNegociacoes;
    #negociacoesView;

    constructor() {
        // O método .bind criar uma função que o seu this tem referência ao atributo fornecido
        // Nes caso, a variável $ mantem a associação ao document
        let $ = document.querySelector.bind(document);

        this.#inputData = $('#data');
        this.#inputQunatidade = $('#quantidade');
        this.#inputValor = $('#valor');
        this.#listaNegociacoes = new ListaNegociacoes();
        this.#negociacoesView = new NegociacoesView($('#negociacoesView'));

        this.#negociacoesView.update(this.#listaNegociacoes);

    }

    adiciona(event) {
        event.preventDefault();

        this.#listaNegociacoes.adiciona(this.#criaNegociacao());
        this.#negociacoesView.update(this.#listaNegociacoes);
        this.#limpaFormulario();

        console.log(this.#listaNegociacoes.negociacoes);

    };

    #criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this.#inputData.value),
            this.#inputQunatidade.value,
            this.#inputValor.value
        );
    }

    #limpaFormulario() {
        this.#inputData.value = '';
        this.#inputQunatidade.value = 1;
        this.#inputValor.value = 0.0;

        this.#inputData.focus();
    }
};