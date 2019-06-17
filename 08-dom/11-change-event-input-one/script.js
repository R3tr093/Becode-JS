/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
    function checking()
    {
        
    
    //Observe les changements de l'input et affiche le nombre de caractères utilisés. Si ce nombre est plus grand que 10, empêche la saisie de nouveau caractère.
    
    // On récupelseére les éléments et variables nécessaire .
    
    var input = document.getElementById("pass-one");
    
    var value = input.value;
    
    var counter = document.getElementById('counter');
    
    
    // Quand on presse une touche on écoute, return false annule l'évenement, return true le réactive
    input.addEventListener("keypress", function(e){
        
        value = input.value;
        


        if (value.length >= 10)
            {
                
                value = input.value;
                alert(" 10 caractères max.")
                e.preventDefault()
            }
        
   
        
        else
            {
                value = input.value;
                return true
              
            }

        
    })
    
        // On utilise l'évenement input pour être plus juste dans le compte des caractéres affichés
        input.addEventListener("input", function(e){
        
        value = input.value;
        


        if (value.length >= 10)
            {
                
                value = input.value;
                counter.innerHTML = String(value.length) + "/ 10";
                alert(" 10 caractères max.")
                e.preventDefault();
            }
        
   
        
        else
            {
                value = input.value;
                counter.innerHTML = String(value.length) + "/ 10";
                return true
              
            }
        
        
    
      
        
        
       
        
    })
    }

    checking();
    
    
    
})();
