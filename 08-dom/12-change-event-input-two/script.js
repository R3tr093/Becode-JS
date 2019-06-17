/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
    
    
    // Récupération des éléments nécessaires au déroulement du programme. 
    
    
    var passInput = document.getElementById("pass-one");
    
    var validity = document.getElementById("validity");
    
    
    // Création d'une variable pour vérifier le nombre de chiffre contenu dans la chaine de caractere.
    
    var integer = 0;
    
    
    // Lorsqu'une modification est effectuer sur le champ passInput on vérifie
    
    passInput.addEventListener("input",function(){
        

        // On vérifie la longueur de la chaine de caractères
        
        var passLength = passInput.value.length
        
        
        // Si elle est supérieur à 8.
        
        if (passLength >= 8)
            {
                
                // On redéfinit notre variable de vérification à 0 lors de chaque modification de la chaine de caractères
                integer = 0;
                
                // On fais une boucle pour passer en revue chaque caractères de la chaine.
                
                for (i=0; i < passLength; i++)
                    {
                        // Cette variable contient le caractère en cours de traitement.
                        
                        var character = passInput.value.charAt(i)
                        
                        // Si le caractère en cours de traitement à pour valeur une des valeurs suivante :  0,1,2,3,4,5,6,7,8,9 on incrémente integer.
                        
                        if (character === "0")
                            {
                                integer++;
                            }
                        
                        
                        if (character === "1")
                            {
                                integer++;
                            }
                        
                        if (character === "2")
                            {
                                integer++;
                            }
                        
                        if (character === "3")
                            {
                                integer++;
                            }
                        
                        if (character === "4")
                            {
                                integer++;
                            }
                        
                        if (character === "5")
                            {
                                integer++;
                            }
                        if (character === "6")
                            {
                                integer++;
                            }
                        
                        if (character === "7")
                            {
                                integer++;
                            }
                        
                        if (character === "8")
                            {
                                integer++;
                            }
                        
                        if (character === "9")
                            {
                                integer++;
                            }
                        
                        // Si on à vérifier chaque caractère et que integer est inférieur à deux ce n'est pas valide
                        
                        if ((i === passLength - 1) && (integer < 2) )
                            {
                                validity.textContent = "pas ok";
                            }
                        
                        // Si on à vérifier chaque caractère et que integer est supérieur à 1, c'est valide.
                        if ((i === passLength - 1) && (integer > 1) )
                            {
                                validity.textContent = "ok";
                            }
                        
                       
                    }

            }
        
        // Si la longueur de la chaine de caractére est inférieur à 8, ce n'est pas valide.
        
        else
            {
                  validity.textContent = "pas ok";
            }
        
        
    })
    
    
   
 
    
    
 

    
    
})();
