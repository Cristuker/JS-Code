class Queue {
    #count = 0;
    #lowestCount = 0;
    #items = {};

    enqueue(element) {
        this.#items[this.#count] = element;
        this.#count++;
    }

    isEmpty() {
        return (this.#count - this.#lowestCount) === 0;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount];
        this.#lowestCount++;
        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return ''
        }

        return this.#items[this.#lowestCount];
    }

    size() {
        return this.#count - this.#lowestCount;
    }

    clear() {
        this.#items = {};
        this.#count = 0;
        this.#lowestCount = 0;
    }

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

// console.log(queue.isEmpty());

// queue.enqueue('John');
// queue.enqueue('Jack');
// queue.enqueue('Camila');
// console.log(queue.toString())
// console.log(queue.size());
// console.log(queue.isEmpty());

// queue.dequeue();
// console.log(queue.toString());
// queue.dequeue();
// console.log(queue.toString());