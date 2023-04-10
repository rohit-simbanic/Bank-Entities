class CreditCard<T, U, T2, T3, T4> {
  constructor(
    private creditCardId: T,
    private expiry: U,
    private cardLimit: number,
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

  public purchaseUsingCard(amount: number) {
    return (this.cardLimit -= amount);
  }
}

const card = new CreditCard<number, Date, number, number, number>(
  12,
  new Date(),
  500000,
  12345,
  23
);

export default CreditCard;
