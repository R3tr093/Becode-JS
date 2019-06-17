/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    

        
    
        document.getElementById("run").addEventListener("click", () => {
        
     
                
          var day = document.getElementById("dob-day").value;
    
          var month = document.getElementById("dob-month").value;

          var year = document.getElementById("dob-year").value;
    
          var date = new Date();

          var currentDay = date.getDay();
            
          var currentMonth = date.getMonth();
            
          var currentYear = date.getFullYear();

         if (month > currentMonth)
             {
                 year++
             }

        if (month === currentMonth)
            {
                if (day > currentDay)
                    {
                        year++
                    }
            }

            
             alert(currentYear - year) 
        
        
    });
    
  
})();
