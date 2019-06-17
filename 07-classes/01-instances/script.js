/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    
    var skitty = new Cat("Skitty","9 ans")
    var pixel = new Cat("Pixel","6 ans")
    
    document.getElementById("run").addEventListener("click",function(){
        

           console.log(" Création de deux objets de type Cat ! ")
           console.log(" ------------------------------------- ")
        
        
           console.log(skitty)
           console.log(pixel)
          
      })
    
    // your code here
})();
