import Account from "./account";
import Bank from "./bank";
import Transaction from "./transaction";

const result = new Account(1234, 7000, "savings", 789);
const bankDetails = new Bank("3Au", 1234, "United Bank Of India");

console.log("Result: ", result);
result.depositMoney(6000);
console.log(bankDetails);

const transaction = new Transaction(1, result.accountID, result.accountBalance);
console.log(transaction);

const transactionInfo = [];
transactionInfo.push(bankDetails.bankID, transaction);
console.log(transactionInfo);
