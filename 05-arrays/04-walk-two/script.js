/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    
    
    document.getElementById("run").addEventListener("click",function(){
        
          var max = fruits.length;
              
              
          fruits.forEach(function(element) {
    
              console.log(element);
          
          }); 
          
          
          
    })

    // your code here
})();
