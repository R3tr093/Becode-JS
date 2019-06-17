/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
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
    
    var val1 = document.getElementById("part-one");
    var val2 = document.getElementById("part-two");
    var val3 = document.getElementById("part-three");
    var val4 = document.getElementById("part-four");
    
    var btn1 = document.getElementById("fix-part-one");
    var btn2 = document.getElementById("fix-part-two");
    var btn3 = document.getElementById("fix-part-three");
    var btn4 = document.getElementById("fix-part-four");
    
    
    // Réecriture du numéro
    function setNewNumber()
    {
     
        if (val2.value < 10)
            {
                var part2 = "0" + val2.value;
            }
        
        else
            {
                var part2 = "+" + val2.value;
            }
        
        if (val3.value < 10)
            {
                var part3 = "0" + val3.value;
            }
        
        else
            {
                var part3 = "+" + val3.value;
            }
        
        if (val4.value < 10)
            {
                var part4 = "0" + val4.value;
            }
        
        else
            {
                var part4 = "+" + val4.value;
            }
        
        
        target.textContent = part1 + part2 + part3 + part4;
    }

    function stopShuffle (param)
    {

         clearInterval(param);
      
    }
    
    // fonction de défilement des numéros -- Le paramètre est un élément du dom avec l'attribut min et max 
    
    function shuffle (elt)
    {
               //Récupération de l'interval
        
               var min = Number(elt.getAttribute("data-min"));
       
               var max = Number(elt.getAttribute("data-max"));
        
               var current = Number(elt.value)
               
               var newNumber = current + 1;
        
               if (newNumber >= max)
                   {
                       newNumber = min;
                   }
                
               elt.value = String(newNumber);

    }
    
    
    
    
    var setShuffle;
    
    var defaultShuffle1 = setInterval(shuffle,0100,val1);
    var defaultShuffle2 = setInterval(shuffle,0100,val2);
    var defaultShuffle3 = setInterval(shuffle,0100,val3);
    var defaultShuffle4 = setInterval(shuffle,0100,val4);
    
    
  function btnEvent (elt,elt2)
    {
            
        elt.addEventListener("click",function(){
       
       
        var btnVal = elt.textContent;
            
        var checkId = elt.getAttribute("id");
            
 
            
        if (checkId === "fix-part-one")
            {
                stopShuffle(defaultShuffle1); 
            }
            
        if (checkId === "fix-part-two")
            {
                stopShuffle(defaultShuffle2); 
            }
            
        if (checkId === "fix-part-three")
            {
                stopShuffle(defaultShuffle3); 
            }
            
        if (checkId === "fix-part-four")
        {
             stopShuffle(defaultShuffle4);
        }    

        
            

       

       
        if (btnVal === "Stop")
          
            {
                setNewNumber();
                elt.textContent = "Start";
                stopShuffle(setShuffle);  
            }
       
       if (btnVal === "Start")
           {
                 elt.textContent = "Stop";
                 setShuffle =  setInterval(shuffle,0100,elt2)

           }

   
        })
    }
    
    
   btnEvent(btn1,val1)    
   btnEvent(btn2,val2)    
   btnEvent(btn3,val3)    
   btnEvent(btn4,val4)    
    
  
       
  
    
    
})();
