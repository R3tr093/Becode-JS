/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
//Definition de la vitesse de frappe   
    

 
// Function qui prend pour paramètre un élément du DOM ainsi qu'une chaine de caractère    
function makeTypeWriter(text, el) {
  
    // Permet de suivre le flux de l'écriture
    var i = 0;
  
    // La valeur de retour de la fonction MakeTypeWriter est un fonction ( typeWriter)
    return function typeWriter() {
    
    // Tant que on n'as pas atteint la valeur max de la chaine de caractére on écris    
      if (i < text.length) 
    {
      el.innerHTML += text.charAt(i);
      i++;
        
     // On rappel cette fonction toute les (0035 ms ou valeur par défaut de la variable speed)    
      setTimeout(typeWriter,  Math.floor(Math.random() * Math.floor(250)));
    }
  }
}
    // On prépare un texte
    var monMessage = " Ceci est  un message écris automatiquement... Woah ! ";
    
    
    //On récupére l'élément qui recevras notre message.
    
    var target = document.getElementById("target");
    
    // On vide target
    target.textContent = ""
    
       // On appel notre fonction pour écrire notre message
       makeTypeWriter(monMessage, document.getElementById("target"))()
    
    
    
})();
