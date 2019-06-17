/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    
    
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    
    
       
    

    
    
     document.getElementById("run").addEventListener("click",function(){
        
    
     
            
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));

            }
         
            var range = birds.length;
            
            var range1 = adjectives.size;
         
            var bird = birds[getRandomInt(range)];
         
            var feminin = bird.fem;
         
            i = 0
         
            var rangeAdj = getRandomInt(range1);
                
            // Delete any point with `x > 10`.
            adjectives.forEach(function(point){
    
             
                    i++;
                
                    if ( i === rangeAdj )
                        {
                            adject = point;
                        }
  
       
                })
         
         
            var final = " Le " + bird.name + " " + adject;
         
           if (feminin)
                {
                    adject = adject + "e";
                    
                    var final = " La " + bird.name + " " + adject;
                }
         
         
            document.getElementById("target").innerHTML = final;
         
         
         
           
          
      })
    

    // your code here
})();
