const accountId = 1432;
let accountEmail = "devdixit@microsoft.com";
var accountPass = "12345";
accountCity = "Delhi";
let accountState;

// accountId = 2; // not allowed

accountEmail = "dd@dd.com";
accountPass = "2345";
accountCity = "Mumbai";

console.log(accountId);

/*
Prefer not  to use  var
because of issue in block scope and functional scope.
*/

console.table([accountEmail, accountPass, accountCity, accountState]);
