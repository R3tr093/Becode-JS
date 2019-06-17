/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
        var genre;
        var nom;
        var ville;
    
    
        function getInfo (){
            
              
                nom = prompt(" Entrez votre nom : ");
                genre = prompt (" Entrez votre genre : H / F ");
                ville = prompt(" Quelle est votre  ville de résidence ? :")
                verInfo();
            
        }

        
        function verInfo(){
        
                alert (" Veuillez répondre par oui ou par non : ")
            
                var verifNom = prompt("Votre nom est bien : " + nom + " ? ")
            
        
                if (verifNom != "oui")
                    {
                        getInfo();
                    }
            
                var verifGenre = prompt("Vous êtes du genre : " + genre)
                
                if (verifGenre != "oui")
                    {
                        getInfo();
                    }
            
                var verifVille = prompt(" Vous résidez à : " +  ville " ? ")
                
                if (verifVille != "oui")
                    {
                        getInfo();
                    }
            
                else
                    {
                        alert(" Aurevoir "  + nom)
                    }
            
            
        }
                
        getInfo()
                        
               

    

    

    
    
    
    
    
    
})();
