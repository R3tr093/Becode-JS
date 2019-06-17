/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
    var source = document.getElementById('source');
    
    var sourceAttr = source.getAttribute('data-image');  
    
    
    var figure = document.querySelector("figure")
    
    var myImg = document.createElement("img");
    
    myImg.setAttribute("src",sourceAttr);
    
    figure.appendChild(myImg)
    
    var material = document.getElementsByClassName('material');
    
    
    
    material[0].removeChild(source);
    
})();
