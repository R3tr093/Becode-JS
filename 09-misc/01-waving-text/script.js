/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
        // On récupére les éléments nécessaire
    
    var target = document.getElementById("target");
    
    // On récupére la chaine de caractére 
    
    var monTexte = target.textContent;
    
    // Function qui prend pour paramètre un élément du DOM ainsi qu'une chaine de caractère    
function makeTypeWriter(text, el) {
  
    // Permet de suivre le flux de l'écriture
    var i = 0;
  
    // La valeur de retour de la fonction MakeTypeWriter est un fonction ( typeWriter)
    return function typeWriter() {
    
    // Tant que on n'as pas atteint la valeur max de la chaine de caractére on écris    
      if (i < text.length) 
    {
      
    
        var min = 19;
        var max = 32;
    
        var min2 = 23;
        var max2 = 36;
    
        var min3 = 27;
        var max3 = 40;
    
    
        var min4 = 30;
        var max4 = 43;    
        
    var span = document.createElement('span');
        
        if ( i % 1 === 0)
            {
                    var randInt = Math.random() * (max - min) + min4;
        
                    span.setAttribute("id",String(i))
                    span.textContent = monTexte.charAt(i)
                    span.style.fontSize = String(randInt) + "px"; 
                    target.appendChild(span)
                    
                    
                   
            }
        
        
        if ( i % 2 === 0)
            {
                    var randInt = Math.random() * (max2 - min2) + min2;
        
                    span.setAttribute("id",String(i))
                    span.textContent = monTexte.charAt(i)
                    span.style.fontSize = String(randInt) + "px"; 
                    target.appendChild(span)
                
                       
                   
            }
        
        
        
        if ( i % 3 === 0)
            {
                    var randInt = Math.random() * (max3 - min3) + min3;
        
                    span.setAttribute("id",String(i))
                    span.textContent = monTexte.charAt(i)
                    span.style.fontSize = String(randInt) + "px"; 
                    target.appendChild(span)
                   
                
                      
            }
        
        
        
        
        if ( i % 4 === 0)
            {
                     var randInt = Math.random() * (max4 - min4) + min4;
        
                    span.setAttribute("id",String(i))
                    span.textContent = monTexte.charAt(i)
                    span.style.fontSize = String(randInt) + "px"; 
                    target.appendChild(span)
                
                    
                   
            }
            
        
      i++;
        
     // On rappel cette fonction toute les (0035 ms ou valeur par défaut de la variable speed)    
      setTimeout(typeWriter, 80);
    }
  }
}
    
    document.getElementById("target").textContent = "";
    
 
      makeTypeWriter("Woo-hoo ! Je fais des vagues ! Wééééé ! Oh... je crois que je vais avoir le mal de mer...", document.getElementById("target"))()
  

    
    
    
    
    
    
    
})();
