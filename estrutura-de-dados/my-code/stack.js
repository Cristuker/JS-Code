class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result; 
    }

    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    clear() {
        // Forma fácil
        // this.count = 0;
        // this.items = {};
        // Respeitando o conceito de LIFO
        while (!this.isEmpty()) {
            this.pop();
        }
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }

        let obtString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            obtString = `${obtString},${this.items[i]}`;
        }
    }
}

const stack2 = new Stack();
stack2.push(5);
stack2.push(7);