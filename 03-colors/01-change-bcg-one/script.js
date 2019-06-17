/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here 
    var btn = document.getElementsByTagName("button")

    btn[0].addEventListener("click",function(){     
        document.body.style.background = "red";
    });                               
    
    btn[1].addEventListener("click",function(){     
        document.body.style.background = "green";   
    });
    
    btn[2].addEventListener("click",function(){     
        document.body.style.background = "yellow";
    
    });
    
    btn[3].addEventListener("click", function(){     
        document.body.style.background = "blue";
    });        
 
    
    
    
})();
    