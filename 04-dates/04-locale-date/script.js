/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    
    
           var date = new Date();

 
          var currentMonth = date.getMonth();
            
          var currentYear = date.getFullYear();
    
          var currentHour = date.getHours()
          var currentMinute = date.getMinutes()
    
          var frDay;
          var frMonth;
    
         if (date.getDay === "Monday")
              {
                  frDay = "Lundi"
              }
    
          if (date.getDay === "Tuesday")
              {
                  frDay = "Mardi"
              }
    
          if (date.getDay === "Wednesday")
              {
                  frDay = "Mercredi"
              }
    
          if (date.getDay === "Thursday")
              {
                  frDay = "Jeudi"
              }
    
          if (date.getDay === "Friday")
              {
                  frDay = "Vendredi"
              }
    
          if (date.getDay === "Saturday")
              {
                  frDay = "Samedi"
              }
    
            else
                {
                 
                    frDay = "Dimanche"
                    
                }
    
    
          if (currentMonth === 1)
              {
                  frMonth = " Janvier "
              }
    
          if (currentMonth === 2)
              {
                  frMonth = " Février "
              }
    
          if (currentMonth === 3)
              {
                  frMonth = " Mars"
              }
    
          if (currentMonth === 4)
              {
                  frMonth = " Avril "
              }
    
          if (currentMonth === 5)
              {
                  frMonth = " Mai "
              }
        
          if (currentMonth === 6)
              {
                  frMonth = " Juin "
              }
    
          if (currentMonth === 7)
              {
                  frMonth = " Juillet "
              }  
       
          if (currentMonth === 8)
              {
                  frMonth = " Aôut "
              }
    
          if (currentMonth === 9)
              {
                  frMonth = " Septembre "
              }
    
          if (currentMonth === 10)
              {
                  frMonth = " Octobre "
              }
    
          if (currentMonth === 11)
              {
                  frMonth = " Novembre "
              }
    
          if (currentMonth === 12)
              {
                  frMonth = " Janvier "
              }
    
    
    
          var dateTransform = frDay + " " + date.getDate() + frMonth + currentYear + ", " + currentHour + "H" + currentMinute;

    
        document.getElementById("target").innerHTML = dateTransform;
            
    
})();

