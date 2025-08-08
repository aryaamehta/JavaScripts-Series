const name = "Rishu"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is${name} and my repo count is ${repoCount}`);

const gameName =new String(`Rishu Raj`)

console.log(gameName[0]);                      //R
console.log(gameName.__proto__);               //{}

console.log(gameName.length);                 //9
console.log(gameName.toUpperCase());         //
console.log(gameName.charAt(2));             //s
console.log(gameName.trim());                // Work on WhiteSpace
console.log(gameName.indexOf('h'));          //3

const newString = gameName.substring(0, 4)
console.log(newString);                      //Rish

const anotherString = gameName.slice(-8,4)
console.log(anotherString)                    //ish

const newStringone ="  rishu  "
console.log(newStringone.length);
console.log(newStringone.trim());

const url = "https:///Risshu.com/Rishu%20Rishu"            //%20 used to remove white space
console.log(url.replace('%20','-'))
console.log(url.includes('sundari'))
console.log(gameName.split('-'));