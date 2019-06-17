/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
     document.getElementById("run").addEventListener("click", () => {
        
     
          var userYear = document.getElementById("year").value
         
          for (i = 0; i <= 11; i++)
              {
                  var date = new Date(userYear, i , 12);
                  
                  if(date.getDay() == 4)
                      {
                        
                         var month = date.getMonth() + 1  
                         var report = console.log('Vendredi 13 dans le ' + month + " iéme mois.")
                         console.log(report)
                      }
                  
              }
         
    });
    
    // Obtenir l'année
    
    // Ouvrir  un objet date à l'anée correspondante en date du 1er janvier
    
    // Passez jour après jour dans un jeu d'instruction if
    
    
})();
