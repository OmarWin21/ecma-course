    // arrays destructuring

    let fruits = ['Apple', 'Banana'];
    let [a, b] = fruits;
    console.log(a, b);

// Object destructuring

let user = {username: 'Omar', age: 29};
let { username, age } = user;
console.log(username, age);

//Spread operator

let person = {name: 'Omar', age: 29};
let country = 'CO';

let data = {id: 1,  ...person, country }
console.log(data); 