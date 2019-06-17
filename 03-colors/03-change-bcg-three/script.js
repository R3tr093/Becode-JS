/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    

    document.getElementById("run").addEventListener("click", () => {
        
     
            var color = ['red','green','blue','yellow','pink','black','white','almond','goldenrod','hotpink','cornflowerblue','orange'];
        
            var randomColor;
        
            function getRandomInt() {
            
                    randomColor = Math.floor(Math.random() * Math.floor(color.length));
                
            }
            
            getRandomInt();
        
            
                  document.body.style.background = color[randomColor];
        
        
    });
})();