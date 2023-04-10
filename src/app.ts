import Account from "./account";
import Transaction from "./transaction";

const result = new Account(1234, 7000, "savings", 789);

console.log("Result: ", result);
result.depositMoney(6000);

const transaction = new Transaction(1, result.accountID, result.accountBalance);
console.log(transaction);
