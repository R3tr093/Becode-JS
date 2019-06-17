/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        
        var a = 1
    
    
        
        while( a < 21)
            {
               
                
                if ( a % 2 > 0)
                    {
                        console.log("Impair")
                    }
                
                else
                {
                
                    alert(a * a)
                    
                }
                
                 a = a + 1;
                
    
            }
       
        
        
    });
})();


