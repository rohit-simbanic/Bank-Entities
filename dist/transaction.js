"use strict";
class Transaction {
    constructor(transactionID, accountID, amount) {
        this.transactionID = transactionID;
        this.accountID = accountID;
        this.amount = amount;
    }
    // get details
    get transactionDetails() {
        return {
            transactionID: this.transactionID,
            accountID: this.accountID,
            totalAmount: this.amount,
        };
    }
    // set new value if required
    set newTransactionID(new_value) {
        this.transactionID = new_value;
    }
    set newAccID(new_value) {
        this.accountID = new_value;
    }
    set newAmount(new_value) {
        this.amount = new_value;
    }
}
const transaction = new Transaction("afsdf@42298999492889", 4322, 400000);
console.log(transaction);
transaction.newTransactionID = "@ABBDSKK77655556666";
