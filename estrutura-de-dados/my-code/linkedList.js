const { defaultEquals } = require('../javascript-datastructures-algorithms-main/src/js/util');
const { Node } = require('../javascript-datastructures-algorithms-main/src/js/data-structures/models/linked-list-models');

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next !=  null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

const list = new LinkedList();
list.push(1);
list.push(2);