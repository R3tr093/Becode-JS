/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
    var img = document.querySelector('img');
    
    var data = img.getAttribute('data-hover');
    
    console.log(data)
    
    
    
      // ce gestionnaire sera exécuté à chaque fois que le curseur passe au dessus de chaque élément de la liste
  img.addEventListener("mouseover", function( event ) {   
  
      img.setAttribute('src',data)
  
  })
    
})();
