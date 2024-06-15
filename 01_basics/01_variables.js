const accountId = 114453
let accountEmail = "Nancy@gmail"
var accountpwd = "1234"
accountCity  = "Udaipur"
// accountId = 2 //not allowed 
accountEmail = "ns@gmail";
accountpwd = "212121"
accountCity = "lucknow"
console.log(accountId);
console.log(accountEmail);
console.log(accountpwd);
console.log(accountCity);
console.table([accountId, accountEmail, accountpwd, accountCity])

/*
prefer not to use var
because of issue in block scope and functional scope
*/