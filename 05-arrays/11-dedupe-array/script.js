/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    
    // your code here

    document.getElementById("run").addEventListener("click",function(){
        
    
     
        function cleanArray(array) {
  
            var i, j, len = array.length, out = [], obj = {};

            for (i = 0; i < len; i++) {
    
                obj[array[i]] = 0;
  
            }
  
            for (j in obj) {
    
                out.push(j);
  
            }
  
            return out;
}
        
        var newArray = cleanArray(fruits);

        
        
                  newArray.forEach(function(element) {

                     
                      console.log(element);
                 
            
             
          
          }); 
              

        
          
          
    })
    

    // your code here
})();
