"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
const transaction_1 = __importDefault(require("./transaction"));
const result = new account_1.default(1234, 7000, "savings", 789);
console.log("Result: ", result);
result.depositMoney(6000);
const transaction = new transaction_1.default(1, result.accountID, result.accountBalance);
console.log(transaction);
