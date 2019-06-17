/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    
    
    
    
    

    
    
     document.getElementById("run").addEventListener("click",function(){
        
    
     
            
            i = 0;
                
            // Delete any point with `x > 10`.
            people.forEach(function(point){

                
                    

                    
                    console.log(" Le Set contient : " + people.size + " personnes.");
                    
                    var exist = people.has("Alexandre");
                
                    i++;
                
                    if (i === people.size)
                        {
                            
                            if (exist)
                            
                            {
                            
                                console.log(" Alexandre figure dans le set ! ")
                        
                            }
                
                            
                            
                        }
                
                    
            })

      })
                
            


    
})();
