/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
    //Au clic sur le bouton, vérifie que les deux mots de passe dans les inputs sont <strong>identiques</strong>. Si ça n'est pas le cas, <em>colore les bordures des inputs en rouge</em>.
    
    var pass = document.getElementById("pass-one");
    var pass2 = document.getElementById("pass-two");
    
    document.getElementById('run').addEventListener("click",function(){
        
        
        if (pass !== pass2)
            {
                pass.style.borderColor = "red"; 
                pass2.style.borderColor = "red"; 
            }
        
        if(pass === pass2)
            {
                 pass.style.borderColor = "green"; 
                 pass2.style.borderColor = "green"; 
            }
  
    })
    
})();
