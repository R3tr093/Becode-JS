/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
    var target = document.getElementById('target');
    
    target.innerHTML += "<table id='array'><tr><th>Mon tableau</th></tr></table>";
    
    var myArray = document.getElementById("array")
    
    var Myquotient = 1;
    
    var i = 1;
    
    var report = "<tr><th> Table de multplication par " + String(Myquotient) + "</th></tr>";
    
    
    
    while (Myquotient < 11)
        {
            i++;
            
            if(i > 10)
                {
                    Myquotient++;
                    i = 1;
                    
                      if (Myquotient < 11)
                          {
                              report += "<tr><th> Table de multplication par " + String(Myquotient) + "</th></tr>";
                          }
                    
                    
                }
            
            if (Myquotient < 11)
                {
                     report += "<td> " + String(i) + " x " + String(Myquotient) + " = " + String(i * Myquotient) + "</td>";
                }
            
           
        }
   
    myArray.innerHTML += report; 
    
    


    
})();
