// # Primitive

// 7 types :String,Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);               //false

const bigNumber = 43567435437573n

//Reference type(Nom-Primitive)

//Array, Object, Function

const heroes= ["Shaktimaan","Naagraj","don"];
let myObj ={
    name: "Rishu",
    age:20,
    
}

const myFunction = function(){
    console.log("Namste bHArat");
}
console.log(typeof bigNumber);            // bigint
console.log(typeof outsideTemp);          // object