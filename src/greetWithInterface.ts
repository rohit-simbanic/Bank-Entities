interface Greetable {
  name?: string;
  greet(text: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(name: string) {
    this.name = name;
  }
  public greet(text: string): void {
    console.log(`${text}, my name is ${this.name} and having age ${this.age}`);
  }
}

const bio = new Person("Rohit");

bio.greet("Hi there! ");
