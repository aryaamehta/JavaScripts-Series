let score="33abc"
let num = 33
 console.log(typeof score);
 console.log(typeof(num));

 let valueINNumber = Number(score)
 console.log(typeof valueINNumber);
 console.log(valueINNumber);

// "33" => 33
//"33abc" => NaN
// true => 1, false=> 0
// "" => false
// "Rishu" => true

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber= 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber));

// ******************** Operation **********************

let value = 33
let negValue = -value

//console.log(negValue);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/3);
//console.log(2%3);

let str1 = "Namste"
let str2 = "Bharat"

let str3 = str1+str2;
console.log(str3);                  //NamsteBharat
console.log("1" + 2);              // 12
console.log("1" + 2 + 3);         // 123
console.log(1 + "2");            // 12
console.log(1 + 2 + "3");       // 33
console.log(true);             // true
console.log(+true);           // 1
console.log(+"");            // 0

let num1 , num2 ,num3
num1 = num2 = num3 = 2 + 2

let gameconter = 100
++gameconter;
console.log(gameconter);      // 101