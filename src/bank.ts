class Bank {
  constructor(
    private bankID: string,
    private swiftCode: number,
    public bankName: string
  ) {}
  // get details
  private get bankDetails() {
    return {
      bankName: this.bankName,
      bankID: this.bankID,
      swiftCode: this.swiftCode,
    };
  }
  // set new value if required

  public set newBankName(new_value: string) {
    this.bankName = new_value;
  }
  protected set newBankId(new_value: string) {
    this.bankID = new_value;
  }
  protected set newSwiftCode(new_value: number) {
    this.swiftCode = new_value;
  }
}

const bankDetails = new Bank("4222#kj", 43322, "NCC Bank of Ind");
console.log(bankDetails);
bankDetails.newBankName = "UCC bank OF INDIA";
