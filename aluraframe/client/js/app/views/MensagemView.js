class MensagemView {
    
    #elemento;

    constructor(elemento) {
        this.#elemento = elemento;
    }

    #template(model) {
        
        /* 
            If ternário. Verifica se a expresão a esquerda da interrogação (?) é verdadeira, caso seja
            o primeiro código a direita da interrogação (?) será executado, caso não seja, o código a 
            direita do dois pontos (:) será executado
        */
        return model.texto ? `<p class='alert alert-info'>${model.texto}</p>` : '<p></p>';
    }

    update(model) { 
        
        this.#elemento.innerHTML = this.#template(model);
    }
}