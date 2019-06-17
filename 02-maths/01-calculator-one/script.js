/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    var one = document.getElementById("op-one").value;
    var two = document.getElementById("op-two").value;
    
    
    
    
    document.getElementById("addition").addEventListener("click", () => {
        
        one = Number(one);
        two = Number(two);
        
        alert(one + two)
        
    });

    document.getElementById("substraction").addEventListener("click", () => {
        
        one = Number(one);
        two = Number(two);
        
        
        alert(one - two)
        
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        
        one = Number(one);
        two = Number(two);
        
        alert(one * two)
        
    });

    document.getElementById("division").addEventListener("click", () => {
            
        one = Number(one);
        two = Number(two);
        
        alert(one / two)
    });
})();
