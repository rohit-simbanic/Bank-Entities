"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(accountID, accountBalance, accountType, branchID) {
        this.accountID = accountID;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
        this.branchID = branchID;
        this.accountID = accountID;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
        this.branchID = branchID;
    }
    // get details
    depositMoney(money) {
        return (this.accountBalance += money);
    }
}
const account = new Account(1234, 4566, "savings", 4121);
// console.log(account);
exports.default = Account;
