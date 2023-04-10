"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
const loan = new Loan(343, 40000, 2000, 543, 12345);
exports.default = Loan;
