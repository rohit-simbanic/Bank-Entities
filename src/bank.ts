class Bank<T, U, T2> {
  constructor(private bankID: T, private swiftCode: U, public bankName: T2) {}
  // get details
  private get bankDetails() {
    return {
      bankName: this.bankName,
      bankID: this.bankID,
      swiftCode: this.swiftCode,
    };
  }
  // set new value if required

  public set newBankName(new_value: T2) {
    this.bankName = new_value;
  }
  protected set newBankId(new_value: T) {
    this.bankID = new_value;
  }
  protected set newSwiftCode(new_value: U) {
    this.swiftCode = new_value;
  }
}

const bankDetails = new Bank<string, number, string>(
  "#3ER",
  43322,
  "NCC Bank of Ind"
);
console.log(bankDetails);
bankDetails.newBankName = "UCC bank OF INDIA";
