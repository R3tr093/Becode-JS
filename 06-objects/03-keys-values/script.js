/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    
    
    
    
      document.getElementById("run").addEventListener("click",function(){
        

          
            console.log(" Liste de clés (propriétés) de l'objet person : ")
          
            console.log ("")
            console.log ("--------------------------------------------------")
            
          
          
            i = 0;
         
          
            for (element in person) {

              
                
            
    
                var currentPerson =  Object.entries(person);
                
                console.log(" L'obet person contient la clé :  " + element); 
                console.log(" La valeur de cette clé est : " + currentPerson[i][1]);
                
                console.log("------------------------------------------------------------")
                
                console.log("")
                console.log("-------------------------------------------------------------")
                
                 
    
            
        
       
                i++;
        }
         
          

           
          
      })
    
    
    
    
    // your code here
})();
