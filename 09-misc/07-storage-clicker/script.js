/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
 
    

 
    
       if (localStorage.getItem("count"))
        {
             var storage = Number(localStorage.getItem("count"))
        }
    
        else
            {
                   
                monStockage = localStorage;
    
                localStorage.setItem('count', 0);
            }
    
    
    document.getElementById("target").innerHTML = "Vous avez effectuer : " + String(localStorage.getItem("count")) + " click ! "
    
    function setCount(){
        
        
        var storage = Number(localStorage.getItem("count"))
        storage++;
        localStorage.setItem('count', storage);
        console.log(storage)
        document.getElementById("target").innerHTML = "Vous avez effectuer : " + String(storage) + " click ! "
        
        
    }
    
    var increment = document.getElementById("increment");
    
    increment.addEventListener("click",function(){
        
        setCount();
        
    })
    
    
    
})();
