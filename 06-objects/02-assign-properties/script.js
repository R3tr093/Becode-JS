/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


   
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        
        {id: "0002", available: false, user: "Nicolas"},
        
        {id: "0003"},
        
        {id: "0004", os: "Windows"},
        
        {id: "0005"},
        
        {id: "0006", os: "macOS"},
        
        {id: "0007"},
        
        {id: "0008"},
    
        {id: "0009", available: false, user: "Anthony"},
    ];
 
    const defaultProps = {
        available: true,
       
        os: "linux",
        
        user: null,
    };
    
    
        
      document.getElementById("run").addEventListener("click",function(){
        
    // Cette variable permet de suivre l'index de l'élément dans la boucle ci-dessous.
    i = 0;
    
    // Cette boucle parcours les objets dans le Array computers      
    for (elements in computers) {

        
          // Si la propriété  available de l'objet a pour valeur undefined, on lui définit ces propriétés selon le array defaultProps
          if (computers[i].available === undefined) 
        {
               computers[i].available = defaultProps.available; 
               
            if (computers[i].os === undefined)
                {
                    computers[i].os = defaultProps.os; 
                }
            
            if (computers[i].user === undefined)
                {
                    computers[i].user = defaultProps.user;
                }
            
               
               
        }
        
         // On affiche l'élément
         console.log(computers[i])
        
         
        
        i++;
         
         
    }
           
          
      })
    
    
    




