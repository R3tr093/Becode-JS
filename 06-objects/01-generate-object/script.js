/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    
  function Personne(lastname, firstname, age, city, country) {
 
      this.lastname = lastname;
          
      this.firstname = firstname;
          
      this.age = Number(age); 
          
      this.city = city ;
          
      this.country = country;
  
      this.salutation = function() {
    
          console.log('Bonjour ! Je m\'appelle ' + this.firstname + " " + this.lastname + '.');
          console.log('J\'ai  ' + this.age + " ans. ");
          console.log('J\'habite à  ' + this.city +  " en " + this.country + ".");
          
       
  };
      
}

  var personne1 = new Personne('Doe','John',25,"Elsweir",'Tamriel');

  personne1.salutation();
        

        
        
    

    

