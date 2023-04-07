"use strict";
class Loan {
    constructor(loanId, issuedAmnt, remainingAmount, branchID, accountNo) {
        this.loanId = loanId;
        this.issuedAmnt = issuedAmnt;
        this.remainingAmount = remainingAmount;
        this.branchID = branchID;
        this.accountNo = accountNo;
    }
    // get deails
    get loanDetails() {
        return {
            loanID: this.loanId,
            issuedAmount: this.issuedAmnt,
            remainingAmount: this.remainingAmount,
            branchID: this.branchID,
            accountNO: this.accountNo,
        };
    }
    // set new value if required
    set newLoanID(new_value) {
        this.loanId = new_value;
    }
    set newIssuedAmnt(new_value) {
        this.issuedAmnt = new_value;
    }
    set newRemainingAmount(new_value) {
        this.remainingAmount = new_value;
    }
    set newBranchID(new_value) {
        this.branchID = new_value;
    }
    set newAccNo(new_value) {
        this.accountNo = new_value;
    }
}
const loan = new Loan(343, 40000, 2000, 543, 12345);
console.log(loan);
loan.newLoanID = 34556;
