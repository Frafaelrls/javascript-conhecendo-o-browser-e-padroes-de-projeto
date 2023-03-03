class DateHelper {
    
    constructor(){

        // A declaração throw lança uma exceção definida pelo usuário
        // Semelhante a cláusula raise do Python
        throw new Error('Essa classe não pode ser instanciada')
    }
    
    static dataParaTexto(data) {

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
        
    }

    static textoParaData(texto) { 

        // Usando a expressão regular /-/g, onde, será verificado todas(g) as ocorrências 
        // e serão subsistidas por ','
        // let data = new Date(this.#inputData.value.replace(/-/g, ','));

        // Os três pontos abaixo é um spread operator, onde cada ponto irá receber um item 
        // de um array (semelhante ao desempacotamento de tuplas do Python)

        // A função map() irá percorrer todos os itens do array chamando a função em cada item

        // Temos também o uso da arrow functions(função de flecha) representada por =>
        // Quando temos apenas uma unica instrução em uma arrow funcion podemos omitir o bloco
        // Por termos apenas uma única instrução a arrow funcion já realiza o retorno da operação

        return new Date(...texto.split('-')
        .map((item, indice) => item - indice % 2))
        
    }

}