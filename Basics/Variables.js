const accountId = 12234
let accountEmail = "Raj@gmail.com"
var accountPAssword = "34567"
accountCity = "Delhi"
let accountState;
//accountId = 2 //not allowed

accountEmail = "012@gmail.com"
accountPAssword = "123456"
console.log(accountId);
console.table([accountId, accountEmail, accountPAssword, accountCity])
/*
Prefer not to use var bacause of issue in 
block scope and functional scope */