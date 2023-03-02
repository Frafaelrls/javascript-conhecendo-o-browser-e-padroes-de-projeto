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
        
        // Usando a expressão regular /-/g, onde, será verificado todas(g) as ocorrências 
        // e serão subsistidas por ','
        //let data = new Date(this.#inputData.value.replace(/-/g, ','));

        // O três pontos abaixo é um spread operator, onde cada ponto irá receber um item 
        // de um array (semelhante ao desempacotamento de tuplas do Python)
        // A função map() irá percorrer todos os itens do array chanmando a função em cada item
        let data = new Date(...
            this.#inputData.value
            .split('-')
            .map(function(item, indice){
                return item - indice % 2
            })
        );
        console.log(data);
    };
};