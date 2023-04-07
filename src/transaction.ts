class Transaction {
  constructor(
    private transactionID: string,
    private accountID: number,
    private amount: number
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

  public set newTransactionID(new_value: string) {
    this.transactionID = new_value;
  }
  protected set newAccID(new_value: number) {
    this.accountID = new_value;
  }
  protected set newAmount(new_value: number) {
    this.amount = new_value;
  }
}

const transaction = new Transaction("afsdf@42298999492889", 4322, 400000);
console.log(transaction);
transaction.newTransactionID = "@ABBDSKK77655556666";

// export default Transaction;
