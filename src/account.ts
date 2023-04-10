class Account<T, T2, U, T3> {
  constructor(
    public accountID: T,
    public accountBalance: T2,
    private accountType: U,
    protected branchID: T3
  ) {
    this.accountID = accountID;
    this.accountBalance = accountBalance;
    this.accountType = accountType;
    this.branchID = branchID;
  }

  // get details
  public depositMoney(money: number) {
    this.accountBalance += money;
    console.log(this.accountBalance);
  }
}

const account = new Account<number, number, string, number>(
  1234,
  4566,
  "savings",
  4121
);
// console.log(account);

export default Account;
