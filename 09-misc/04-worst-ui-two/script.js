/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    
    // Récupération des éléments nécessaires
    
    var target = document.getElementById("target");
    
    
    var btn1 = document.getElementById("part-one");
    var btn2 = document.getElementById("part-two");
    var btn3 = document.getElementById("part-three");
    var btn4 = document.getElementById("part-four");
    
    
    var phoneNumber = target.value;
    

    
    // Création d'une fonction d'écriture du numéro
    
    function setNewNumber()
    {
     
                
        var part1 = "+" + btn1.textContent;
        var part2 = btn2.textContent
        var part3 = btn3.textContent
        var part4 = btn4.textContent
        
        target.textContent = part1 + part2 + part3 + part4;
    }
    
    
    
    // Cette fonction sera dupliqué pour chaque bouton
    
    btn1.addEventListener("click",function(){
       
        
        //Récupération de l'interval
        
        var min = Number(btn1.getAttribute("data-min"));
        var max = Number(btn1.getAttribute("data-max"));
        
        // On génére un nombre aléatoire dans l'interval
        var randInt = Math.random() * (max - min) + min;
        
        // On cast le décimal en un entier
        randInt = Math.floor(randInt)
        
        btn1.textContent = String(randInt)

        
        // On écris la nouvelle valeur
        setNewNumber();
        
    })
    
    
    btn2.addEventListener("click",function(){
       
        
        //Récupération de l'interval
        
        var min = Number(btn2.getAttribute("data-min"));
        var max = Number(btn2.getAttribute("data-max"));
        
        // On génére un nombre aléatoire dans l'interval
        var randInt = Math.random() * (max - min) + min;
        
        // On cast le décimal en un entier
        randInt = Math.floor(randInt)
        
          if (randInt <= 9)
            {
                btn2.textContent = "0" + String(randInt)
            }
        
        else
            {
                btn2.textContent = String(randInt)
            }
        

        
        // On écris la nouvelle valeur
        setNewNumber();
        
    })
    
    btn3.addEventListener("click",function(){
       
        
        //Récupération de l'interval
        

        
        
        
        // On cast le décimal en un entier
        randInt = Math.floor(randInt)
        
        
          if (randInt <= 9)
            {
                btn3.textContent = "0" + String(randInt)
            }
        
        else
        {
            btn3.textContent = String(randInt)
        }
        
     

        
        // On écris la nouvelle valeur
        setNewNumber();
        
    })
    
    
    btn4.addEventListener("click",function(){
       
        
        //Récupération de l'interval
        
        var min = Number(btn4.getAttribute("data-min"));
        var max = Number(btn4.getAttribute("data-max"));
        
        // On génére un nombre aléatoire dans l'interval
        var randInt = Math.random() * (max - min) + min;
        
        // On cast le décimal en un entier
        randInt = Math.floor(randInt)
        
        
        if (randInt <= 9)
            {
                btn4.textContent = "0" + String(randInt)
            }
        
        else
            {
                    btn4.textContent = String(randInt)
            }
        
    

        
        // On écris la nouvelle valeur
        setNewNumber();
        
    })
    
    
})();
