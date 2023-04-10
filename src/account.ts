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
  // set new value if required

  // protected set bankAcc(new_value: T) {
  //   this.accountID = new_value;
  // }
  // protected set bankAccBal(new_value: T2) {
  //   this.accountBalance = new_value;
  // }
  // protected set bankAccType(new_value: U) {
  //   this.accountType = new_value;
  // }
  // protected set branchIdNew(new_value: T3) {
  //   this.branchID = new_value;
  // }
}

const account = new Account<number, number, string, number>(
  1234,
  4566,
  "savings",
  4121
);
// console.log(account);

export default Account;
