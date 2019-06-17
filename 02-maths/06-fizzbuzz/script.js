/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

      a = 0
    
        while (a < 101)
            {
                
                 if (a % 5 === 0 && a % 3 === 0 )
                    {
                        console.log("FizzBuzz : " + a)
                        a = a + 1;
                    }
                
                if (a % 3 === 0)
                    {
                        console.log("Fizz : " + a)
                    }
                
                
                if (a % 5 === 0)
                    {
                        console.log("Buzz : " + a)
                    }
                
                else
                    {
                        console.log(a)
                    }
                
               
                
                
                
                
                
                a = a + 1;
            }

})();
