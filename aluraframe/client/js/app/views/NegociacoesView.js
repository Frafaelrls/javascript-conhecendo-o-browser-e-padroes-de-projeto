class NegociacoesView {

    #elemento;

    constructor(elemento) {

        this.#elemento = elemento
    }

    #template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.negociacoes.map(negociacao => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    
                    `).join('')}
            </tbody>
            
            <tfoot>
            <tr>
            <td colspan='3'>Total usando Immediately-invoked function expression (IIFE):</td>

                <!-- 
                    Usando uma Immediately-invoked function expression (IIFE)  
                    Sintaxe: (function(){})()    
                    Essa função é uma função auto-invocada 
                 -->    
                <td>${
                    (function() {
                        let total = 0;
                        model.negociacoes.forEach(negociacao => total += negociacao.volume);
                        return total;
                    })()
                }</td>
            </tr>
            <tr>
                <td colspan='3'>Total usando o paradigma funcional:</td>

                <!-- 
                    A função reduce() processa o array e retorna um único resultado     
                    Ela recebe uma função como primeiro parâmetro e o valor inicial como segundo parâmetro  
                    A função terá os seguintes parâmetros: 
                        total - Variável que irá acumular o valor a cada interação   
                        negociacao - Elemento da lista   
                -->    
                <td>
                    ${model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)}
                </td>
            </tr>

                
            </tfoot>
        </table>
        `;
    }

    update(model) {
        this.#elemento.innerHTML = this.#template(model);
    }
}