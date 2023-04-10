import Account from "./account";
import Bank from "./bank";
import CreditCard from "./creditCard";
import Loan from "./loan";
import Transaction from "./transaction";

const result = new Account(1234, 7000, "savings", 789);

console.log("Initial Account Details: ", result);
// money deposit
result.depositMoney(6000);

const bankDetails = new Bank("3Au", 1234, "United Bank Of India");
const bankName = bankDetails.bankName;

const transaction = new Transaction(1, result.accountID, result.accountBalance);

console.log({ ...transaction, bankName });

// card details

const card = new CreditCard(
  123,
  new Date(2028, 4, 5).toLocaleDateString(),
  30000,
  result.accountID,
  77
);

// console.log(card);

// purchase something using card and decrease limit
card.purchaseUsingCard(1000);

console.log(card);

// don't allow to change property
Object.freeze(card);
// check frozen or not
console.log(Object.isFrozen(card));
// turn into array of array items from object
console.log(Object.entries(card));

// get property name from an object
console.log(Object.getOwnPropertyNames(card));
// get only key property from an array in the form of array
console.log(Object.keys(card));
// get only value property from an array in the form of array
console.log(Object.values(card));

// Loan section

const loan = new Loan(1, 10000, 3000000, result.branchID, result.accountID);
console.log(loan);
