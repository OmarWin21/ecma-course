
//Declarando
class user {}
// //Instancia de una clase
// const newUser = new user();

class user{
    //metodos
    greeting (){
        return 'Hello';
    }
};

const ozlnx = new user();
console.log(ozlnx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor

class user {
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting (){
        return 'Hello';
    }
}
const omar = new user();

//This 
class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters getters

class user {

    //cosntructor
    constructor(name, age){
        this.name = name;
        this.age= age;
    }

    //metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age;

    }
    set uAge(n){
        this.age =n;
    }
}

const bebeloper1 = new user ('Omar', 29);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);