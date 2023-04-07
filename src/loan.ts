class Loan {
  constructor(
    private loanId: number,
    private issuedAmnt: number,
    private remainingAmount: number,
    private branchID: number,
    private accountNo: number
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

  public set newLoanID(new_value: number) {
    this.loanId = new_value;
  }
  protected set newIssuedAmnt(new_value: number) {
    this.remainingAmount = new_value;
  }
  protected set newBranchID(new_value: number) {
    this.branchID = new_value;
  }
  protected set newAccNo(new_value: number) {
    this.accountNo = new_value;
  }
}

const loan = new Loan(343, 40000, 2000, 543, 12345);
console.log(loan);
loan.newLoanID = 34556;
