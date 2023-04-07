class Loan<T, T2, T3, T4, T5> {
  constructor(
    private loanId: T,
    private issuedAmnt: T2,
    private remainingAmount: T3,
    private branchID: T4,
    private accountNo: T5
  ) {}

  // get deails
  private get loanDetails() {
    return {
      loanID: this.loanId,
      issuedAmount: this.issuedAmnt,
      remainingAmount: this.remainingAmount,
      branchID: this.branchID,
      accountNO: this.accountNo,
    };
  }
  // set new value if required

  public set newLoanID(new_value: T) {
    this.loanId = new_value;
  }
  protected set newIssuedAmnt(new_value: T2) {
    this.issuedAmnt = new_value;
  }
  protected set newRemainingAmount(new_value: T3) {
    this.remainingAmount = new_value;
  }
  protected set newBranchID(new_value: T4) {
    this.branchID = new_value;
  }
  protected set newAccNo(new_value: T5) {
    this.accountNo = new_value;
  }
}

const loan = new Loan<number, number, number, number, number>(
  343,
  40000,
  2000,
  543,
  12345
);
console.log(loan);
loan.newLoanID = 34556;
