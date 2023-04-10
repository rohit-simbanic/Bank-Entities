"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
const bank_1 = __importDefault(require("./bank"));
const creditCard_1 = __importDefault(require("./creditCard"));
const loan_1 = __importDefault(require("./loan"));
const transaction_1 = __importDefault(require("./transaction"));
const result = new account_1.default(1234, 7000, "savings", 789);
console.log("Initial Account Details: ", result);
// money deposit
result.depositMoney(6000);
const bankDetails = new bank_1.default("3Au", 1234, "United Bank Of India");
const bankName = bankDetails.bankName;
const transaction = new transaction_1.default(1, result.accountID, result.accountBalance);
console.log(Object.assign(Object.assign({}, transaction), { bankName }));
// card details
const card = new creditCard_1.default(123, new Date(2028, 4, 5).toLocaleDateString(), 30000, result.accountID, 77);
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
const loan = new loan_1.default(1, 10000, 3000000, result.branchID, result.accountID);
console.log(loan);
