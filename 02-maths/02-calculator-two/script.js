/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        
        
        
        var one = document.getElementById("op-one").value;
        var two = document.getElementById("op-two").value;
        
        
        
        
switch (operation) {
  case 'addition':
    
              
        one = Number(one);
        two = Number(two);
        
        alert(one + two)
        
        
    break;

  case 'soustraction':
        
              
        one = Number(one);
        two = Number(two);
        
        alert(one - two)
  
  
  case 'multiplication':
    
              
        one = Number(one);
        two = Number(two);
        
        alert(one * two)
        
        
    break;

  case 'division':
    
          
        one = Number(one);
        two = Number(two);
        
        alert(one / two)    
        
        
    break;
        
        
    };
        
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
