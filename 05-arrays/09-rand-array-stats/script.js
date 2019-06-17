/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // your code here
    
    
    var numbers = []
    
        document.getElementById("run").addEventListener("click",function(){
        
            // Function to generate 10 random numbers between 0 > 100 in the array numbers
            function generate()
            {
                i = 0;
                
                while(i <= 9)
                    {
                        
                        
                          var randomNumber = Math.floor(Math.random() * Math.floor(100));
                        
                          numbers[i] = randomNumber;
                        
                          i++;
                        
                    }
            }
            
            
            
            // Write the value of numbers into td 
            
            function Writer ()
            {
                
                 // We use this var to follow the current index of element in foreach
                 i = 0;
                
                
                 // Using this var for know the max range of array
                 var max = numbers.length;

                 // We run the array numbers
                 numbers.forEach(function(element) {
    
                  
                    // We keep an eye about the index 
                     i++;
                    
                    // We use the var i for writing in each td tag, also we get the element by i - 1 in array. 
                    document.getElementById("n-" + i).innerHTML = numbers[i-1]
            
                }); 
                
              
                
                
            }
            
            // Afficher le plus petit nombre
            
            function Lower ()
            {
                
                
                 // We use this var to follow the current index of element in foreach
                 i = 0;
                
                
                 // Using this var for know the max range of array
                 var max = numbers.length;
                
                
                 // Using this var to know which numbers is the lower.
                 var before = 100;
              
                 // We run the array numbers
                 numbers.forEach(function(element) {
    
                    // If the current element is lower then before, we set this value to before 
                    if (element < before)
                        {
                            before = element;
                        }
                     
                    // We keep an eye about the index 
                     i++;
                    
                     // When the index is over we show who is the lower
                     if (i === max)
                         {
                               document.getElementById("min").innerHTML = before;
                         }  
            
                }); 
                
                
            }
            
            // Afficher le plus grand nombre 
            
            function Most ()
            {
                
                
                 // We use this var to follow the current index of element in foreach
                 i = 0;
                
                
                 // Using this var for know the max range of array
                 var max = numbers.length;
                
                
                 // Using this var to know which numbers is the higher.
                 var before = 0;
              
                 // We run the array numbers
                 numbers.forEach(function(element) {
    
                    // If the current element is higher then before, we set this value to before 
                    if (element > before)
                        {
                            before = element;
                        }
                     
                    // We keep an eye about the index 
                     i++;
                    
                     // When the index is over we show who is the higher
                     if (i === max)
                         {
                               document.getElementById("max").innerHTML = before;
                         }  
            
                }); 
                
                
            }
            
            // Afficher la somme de tout les nombres
            
            function Total ()
            {
                 // We use this var to follow the current index of element in foreach
                 i = 0;
                
                
                 // Using this var for know the max range of array
                 var max = numbers.length;
                
                 var total = 0;
              
                 // We run the array numbers
                 numbers.forEach(function(element) {
    
                     // We increment the current value in the total var
                     total = total + Number(element);
                     
                    // We keep an eye about the index 
                     i++;
                    
                     // When the index is over we show the result
                     // We also can get the average
                     if (i === max)
                         {
                               
                               document.getElementById("sum").innerHTML = total;
                             
                               document.getElementById("average").innerHTML = total / 10;
                               
                         }  
            
                }); 
            }
            
            
            // Call each function one time where a click on the btn is detected
            generate();
            Writer();
            Lower();
            Most();
            Total();
        })
            

