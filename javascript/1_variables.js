const accountId=12345;
let accountPassword="123"
var accountType="Savings"
accountCity="bengaluru"
let accountState

console.table([typeof(accountId),typeof(accountPassword),typeof(accountType),typeof(accountCity),typeof(accountState)])
console.table([accountId,accountPassword,accountType,accountCity,accountState]);

/*
prefer not to use var because of issues in functional and block scope
*/