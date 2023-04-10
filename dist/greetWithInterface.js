"use strict";
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(text) {
        console.log(`${text}, my name is ${this.name} and having age ${this.age}`);
    }
}
const bio = new Person("Rohit");
bio.greet("Hi there! ");
