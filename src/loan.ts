import Account from "./account";

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

  // account = new Account(1234, 30000, "savings", 789);
  // set new value if required
}

const loan = new Loan<number, number, number, number, number>(
  343,
  40000,
  2000,
  543,
  12345
);

export default Loan;
