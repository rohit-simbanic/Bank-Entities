class CreditCard<T, U, T2, T3, T4> {
  constructor(
    private creditCardId: T,
    private expiry: U,
    private cardLimit: T2,
    private accountId: T3,
    private customerID: T4
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

  public set newCardId(new_value: T) {
    this.creditCardId = new_value;
  }
  protected set newExpiry(new_value: U) {
    this.expiry = new_value;
  }
  protected set newCardLimit(new_value: T2) {
    this.cardLimit = new_value;
  }
  protected set newAccountID(new_value: T3) {
    this.accountId = new_value;
  }
  protected set newCustomerId(new_value: T4) {
    this.customerID = new_value;
  }
}

const card = new CreditCard<number, Date, number, number, number>(
  12,
  new Date(),
  500000,
  12345,
  23
);
console.log(card);
card.newCardId = 90;
