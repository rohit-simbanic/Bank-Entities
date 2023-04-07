class Transaction<U, T, T2> {
  constructor(
    private transactionID: U,
    private accountID: T,
    private amount: T2
  ) {}

  // get details
  private get transactionDetails() {
    return {
      transactionID: this.transactionID,
      accountID: this.accountID,
      totalAmount: this.amount,
    };
  }
  // set new value if required

  public set newTransactionID(new_value: U) {
    this.transactionID = new_value;
  }
  protected set newAccID(new_value: T) {
    this.accountID = new_value;
  }
  protected set newAmount(new_value: T2) {
    this.amount = new_value;
  }
}

const transaction = new Transaction<string, number, number>(
  "afsdf@42298999492889",
  4322,
  400000
);
console.log(transaction);
transaction.newTransactionID = "@ABBDSKK77655556666";

// export default Transaction;
