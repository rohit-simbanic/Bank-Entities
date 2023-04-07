"use strict";
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
    set newCardId(new_value) {
        this.creditCardId = new_value;
    }
    set newExpiry(new_value) {
        this.expiry = new_value;
    }
    set newCardLimit(new_value) {
        this.cardLimit = new_value;
    }
    set newAccountID(new_value) {
        this.accountId = new_value;
    }
    set newCustomerId(new_value) {
        this.customerID = new_value;
    }
}
const card = new CreditCard(12, new Date(), 500000, 12345, 23);
console.log(card);
card.newCardId = 90;
