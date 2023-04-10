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
    // set new value if required
    set newBankName(new_value) {
        this.bankName = new_value;
    }
    set newBankId(new_value) {
        this.bankID = new_value;
    }
    set newSwiftCode(new_value) {
        this.swiftCode = new_value;
    }
}
const bankDetails = new Bank("#3ER", 43322, "NCC Bank of Ind");
console.log(bankDetails);
bankDetails.newBankName = "UCC bank OF INDIA";
exports.default = Bank;
