const { Queue } = require("./queue");

// @ts-check
function hotPotato(elementList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }

    while(queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        const name = queue.dequeue()
        console.log(name)
        eliminatedList.push(name);
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato Game`);
});

console.log(`The winner is: ${result.winner}`)