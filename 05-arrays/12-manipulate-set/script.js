/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]);


    
        document.getElementById("run").addEventListener("click",function(){
        
    
     
            
            i = 0;
                
            // Delete any point with `x > 10`.
            fruits.forEach(function(point){
    
                if (point === "pomme" || point === "cerise") {
    
                    fruits.delete(point);
                    
                    point = "pomme";
                    i++;
                    
                    if (i > 1)
                        {
                            fruits.forEach(function(point){
                            
                                console.log(point)
                            })
                        }
                    
  
       
                }
                
            fruits.add("banane");

            fruits.add("kiwi");

    });
              

        
          
          
    })
    
    
    // your code here
})();
