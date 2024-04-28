/*
------ What is a class? -------
class is a blueprint of actual object. Object is an instance of class. We can create object from class.

In another sentence, we can say,
We can think of a class like a blueprint of a house. A class is not a real world object but we can create objects from a class. It is like an template for an object.

We can create classes using the class keyword which is reserved keyword in JavaScript. Classes can have their own properties and methods.

Let's take an example. Below is a blueprint for a house (like a class).

==============================

------- There are 4 main principles in OOP, and they are: ----------
 1. Abstraction
 2. Encapsulation
 3. Inheritance
 4. Polymorphism
*/

class Student {
    constructor(name, dateOfBirth, roll) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.roll = roll
    }

    sayIntro() {
        return `Hey there! My name is ${this.name} and my roll number is ${this.roll}`
    }
}

const Nahid = new Student("Nahidul Islam", "22 November 2012", 1);
console.log(Nahid.name) // Nahidul Islam

const Fahim = new Student("Fahim Islam", "22 November 2014", 3);
console.log(Fahim.dateOfBirth) // 22 November 2014

console.log(Nahid.sayIntro()) // Hey there! My name is Nahidul Islam and my roll number is 1