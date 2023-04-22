class Queue {
    
    // Quantidade de items na fila.
    #count = 0;

    // Serve para controlar quando é o primeiro item da fila. Não necessáriamente pode ser 0.
    #lowestCount = 0;

    // Objeto com todos os items armazenados.
    #items = {};
    
    // Adiciona os items na fila.
    enqueue(element) {
        this.#items[this.#count] = element;
        this.#count++;
    }

    // Verifica se a fila está vazia.
    isEmpty() {
        return (this.#count - this.#lowestCount) === 0;
    }

    // Remove o primeiro item da fila.
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount];
        this.#lowestCount++;
        return result;
    }

    // Retorna o primeiro item da fila.
    peek() {
        if(this.isEmpty()) {
            return ''
        }

        return this.#items[this.#lowestCount];
    }

    // Retorna o tamanho da fila.
    size() {
        return this.#count - this.#lowestCount;
    }

    // Limpa a fila.
    clear() {
        this.#items = {};
        this.#count = 0;
        this.#lowestCount = 0;
    }

    // Retorna todos os items da fila em uma string.
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString= `${this.#items[this.#lowestCount]}`;

        for (let index = this.#lowestCount + 1; index < this.#count; index++) {
            objString = `${objString}, ${this.#items[index]}`;
        }
        return objString;
    }

}

module.exports = {
    Queue
}

const queue = new Queue();

queue.enqueue("Cristian"); // Cristian
queue.enqueue("Paulo"); // Cristian, Paulo
console.log(queue.size()) // 2
queue.enqueue("Mateus"); // Cristian, Paulo, Mateus
queue.dequeue();
console.log(queue.toString()) // Paulo, Mateus
console.log(queue.peek()); // Paulo
queue.clear();
console.log(queue.isEmpty()); // True