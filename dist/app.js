"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
const bank_1 = __importDefault(require("./bank"));
const transaction_1 = __importDefault(require("./transaction"));
const result = new account_1.default(1234, 7000, "savings", 789);
const bankDetails = new bank_1.default("3Au", 1234, "United Bank Of India");
console.log("Result: ", result);
result.depositMoney(6000);
console.log(bankDetails);
const transaction = new transaction_1.default(1, result.accountID, result.accountBalance);
console.log(transaction);
const transactionInfo = [];
transactionInfo.push(bankDetails.bankID, transaction);
console.log(transactionInfo);
