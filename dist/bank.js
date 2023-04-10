"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(bankID, swiftCode, bankName) {
        this.bankID = bankID;
        this.swiftCode = swiftCode;
        this.bankName = bankName;
    }
    // get details
    get bankDetails() {
        return {
            bankName: this.bankName,
            bankID: this.bankID,
            swiftCode: this.swiftCode,
        };
    }
}
const bankDetails = new Bank("#3ER", 43322, "NCC Bank of Ind");
// console.log(bankDetails);
exports.default = Bank;
