class Bank<T, U, T2> {
  constructor(public bankID: T, private swiftCode: U, public bankName: T2) {}
  // get details
  private get bankDetails() {
    return {
      bankName: this.bankName,
      bankID: this.bankID,
      swiftCode: this.swiftCode,
    };
  }
  // set new value if required
}

const bankDetails = new Bank<string, number, string>(
  "#3ER",
  43322,
  "NCC Bank of Ind"
);
// console.log(bankDetails);

export default Bank;
