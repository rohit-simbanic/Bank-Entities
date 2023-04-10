"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCard {
    constructor(creditCardId, expiry, cardLimit, accountId, customerID) {
        this.creditCardId = creditCardId;
        this.expiry = expiry;
        this.cardLimit = cardLimit;
        this.accountId = accountId;
        this.customerID = customerID;
        this.creditCardId = creditCardId;
        this.expiry = expiry;
        this.cardLimit = cardLimit;
        this.accountId = accountId;
        this.customerID = customerID;
    }
    // get card details
    get cardDetails() {
        return {
            cardID: this.creditCardId,
            expiry: this.expiry,
            cardLimit: this.cardLimit,
            accountId: this.accountId,
            customerID: this.customerID,
        };
    }
    // set new value if required
    purchaseUsingCard(amount) {
        return (this.cardLimit -= amount);
    }
}
const card = new CreditCard(12, new Date(), 500000, 12345, 23);
exports.default = CreditCard;
