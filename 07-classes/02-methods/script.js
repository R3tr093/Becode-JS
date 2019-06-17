/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    
    //Crée une classe : Person

    // Elle aura deux propriétés, firstname et lastname
    
    // ainsi qu'une méthode : sayHello  qui retournera "Hello, [firstname] [lastname]!".
                    
    //Au clic sur le bouton, crée une instance de la classe Person et affiche dans la console la valeur de retour de la méthode sayHello.</p>
                
    
    
    

    
    document.getElementById("run").addEventListener("click",function(){
        

        
        class Person {

            constructor(firstname, lastname) {
   
                this.firstname = firstname;
    
                this.lastname = lastname;
  }


   get sayHello() {
    return this.Hello();
  }            
            
  Hello() {
    return "Hello, " + this.firstname + " " + this.lastname; 
  }
}

const John = new Person("John","Doe")

console.log(John.sayHello);
        

        
          
      })
    
