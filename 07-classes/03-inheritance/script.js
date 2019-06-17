/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
       
        
        
        
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
 
class Dog extends Animal {
  
    static getGreeting() {return greeting;};
  
    static setGreeting(positionStatique) {greeting = positionStatique};
  
    constructor(name, greeting) {
    
        super();
    
        this.name = name;
    
        this.constructor.greeting = greeting;
  
    };
};

class Cat extends Animal {
 
    static getGreeting() {return greeting;};
  
    static setGreeting(positionStatique) {greeting = positionStatique};
  
    constructor(name, greeting) {
    
        super();
    
        this.name = name;
    
        this.constructor.greeting = greeting;
  };
};

var chien = new Dog("Rouky", "Woof");
var chat = new Cat("Felix", "Miaw");

console.log(chien.sayHello());
console.log(chat.sayHello());// your code here

    
    
    
})();
