class Account {
  constructor(
    private accountID: number,
    private accountBalance: number,
    private accountType: string,
    protected branchID: number
  ) {
    this.accountID = accountID;
    this.accountBalance = accountBalance;
    this.accountType = accountType;
    this.branchID = branchID;
  }

  // get details
  private get bankAccDetails() {
    return {
      accountNo: this.accountID,
      accountBalance: this.accountBalance,
      accountType: this.accountType,
      branchID: this.branchID,
    };
  }
  // set new value if required

  public set bankAcc(new_value: number) {
    this.accountID = new_value;
  }
  protected set bankAccBal(new_value: number) {
    this.accountBalance = new_value;
  }
  protected set bankAccType(new_value: string) {
    this.accountType = new_value;
  }
  protected set branchIdNew(new_value: number) {
    this.branchID = new_value;
  }
}

const account = new Account(1234, 4566, "savings", 4121);
console.log(account);
account.bankAcc = 12345;

export default Account;
