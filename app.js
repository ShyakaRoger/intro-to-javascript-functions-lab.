/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// const isAdult
// write a function with the name isAdult
// isAdult has a parameter named age
// Age is 18 and over return Adult
// else retun minor

  const isAdult = function isAdult(age) {
    if (age >= 18) {
      return 'Adult';
    } else {
      return 'Minor';
    }
  }
  
  console.log('Exercise 2 Result:', isAdult(21));


// Exercise 3: isCharAVowel()
/* Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
    
    if (char === 'a' , 'e' ,'i' , 'o' , 'u') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log('Exercise 3 Result:', isCharAVowel("a"));  //  logs true

  // Exercise 4: generateEmail()

  /*Create a function named generateEmail. It should take two strings: 
  a name and a domain. It should return a simple email address.
  
  Example: generateEmail('johnsmith', 'example.com') 
  should return 'johnsmith@example.com'.
  
  Complete the exercise in the space below:
  */


  function generateEmail(name, domain) {
    return name + '@' + domain;
  }
  
  console.log(generateEmail('johnsmith', 'example.com'));  // returns 'johnsmith@example.com'
  

  /*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

*/

function greetUser(name, timeOfDay) {
    return "Good " + timeOfDay + ", " + name + "!";
  }
  
  console.log(greetUser("Roger", "evening")); 

  /*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.


*/

function maxOfThree(a,b,c ){
    if (b>a && b>c){
        return b;
    }
}
console.log(maxOfThree(6,10,4));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

given bill amount of 30 and a tip percentage of 18

Complete the exercise in the space below:
*/

function calculateTip(billAmount, tipPercentage){
    if (billAmount === 30 && tipPercentage === 18){
        return (billAmount * tipPercentage )/ 100;
    }
    
}

console.log(calculateTip(30, 18));