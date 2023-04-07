class CreditCard {
  constructor(
    private creditCardId: number,
    private expiry: Date,
    private cardLimit: number,
    private accountId: number,
    private customerID: number
  ) {
    this.creditCardId = creditCardId;
    this.expiry = expiry;
    this.cardLimit = cardLimit;
    this.accountId = accountId;
    this.customerID = customerID;
  }
  // get card details
  private get cardDetails() {
    return {
      cardID: this.creditCardId,
      expiry: this.expiry,
      cardLimit: this.cardLimit,
      accountId: this.accountId,
      customerID: this.customerID,
    };
  }

  // set new value if required

  public set newCardId(new_value: number) {
    this.creditCardId = new_value;
  }
  protected set newExpiry(new_value: Date) {
    this.expiry = new_value;
  }
  protected set newCardLimit(new_value: number) {
    this.cardLimit = new_value;
  }
  protected set newAccountID(new_value: number) {
    this.accountId = new_value;
  }
  protected set newCustomerId(new_value: number) {
    this.customerID = new_value;
  }
}

const card = new CreditCard(12, new Date(), 500000, 12345, 23);
console.log(card);
card.newCardId = 90;
