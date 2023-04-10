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
    depositMoney() {
        return this.accountBalance;
    }
    // set new value if required
    set bankAcc(new_value) {
        this.accountID = new_value;
    }
    set bankAccBal(new_value) {
        this.accountBalance = new_value;
    }
    set bankAccType(new_value) {
        this.accountType = new_value;
    }
    set branchIdNew(new_value) {
        this.branchID = new_value;
    }
}
const account = new Account(1234, 4566, "savings", 4121);
// console.log(account);
exports.default = Account;
