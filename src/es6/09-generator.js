function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Omar', 'Andres', 'Ulises', 'Dora']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);