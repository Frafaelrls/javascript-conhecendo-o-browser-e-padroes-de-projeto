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
            <td colspan='3'></td>
                <!-- Usando uma Immediately-invoked function expression (IIFE) -->    
                <!-- Sintaxe: (function(){})() -->    
                <!-- Essa função é uma função auto-invocada -->    
                <td>${
                    (function() {
                        let total = 0;
                        model.negociacoes.forEach(negociacao => total += negociacao.volume);
                        return total;
                    })()
                }</td>
            </tfoot>
        </table>
        `;
    }

    update(model) {
        this.#elemento.innerHTML = this.#template(model);
    }
}