interface Greetable<T> {
  name?: T;
  greet(text: string): void;
}

class Person implements Greetable<string> {
  name: string;
  age = 30;
  constructor(name: string) {
    this.name = name;
  }
  public greet<T>(text: string): void {
    console.log(`${text}, my name is ${this.name} and having age ${this.age}`);
  }
}

const bio: Greetable<string> = new Person("Rohit");

bio.greet("Hi there! ");
