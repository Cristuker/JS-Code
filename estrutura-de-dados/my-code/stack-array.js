const _items = Symbol('stackItems');
const items = new WeakMap();

class StackWeak {
    constructor() {
        items.set(this, []);
    }

    push(element) {
        const s = items.get(this);
        s.push(s);
    }

    pop() {
        const s = items.get(this);
        const r = s.pop();
        return r;
    }
}


class Stack {
    #items = [];
    #count = 0;
    constructor() {
    }

    push(element) {
        this.#items.push(element);
        this.#count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.#count--;
        const result = this.#items[this.#count];
        delete this.#items[this.#count];
        return result;
    }

    peek() {
        return this.#items[this.#items.length - 1];
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    size() {
        return this.#count;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.#items[0]}`;
        for (let index = 0; index < this.#count; index++) {
            objString = `${objString}, ${this.#items[index]}`;
        }
        return objString;
    }
}


const stack = new Stack();

console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
console.log(stack.peek());
stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())
stack.push(15);
stack.pop()
stack.pop()
console.log(stack.size())

