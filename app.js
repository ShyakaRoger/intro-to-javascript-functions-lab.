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
    // Checking if the character is a vowel usig logical OR || method operator.
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

  console.log('Exercise 3 Result:', isCharAVowel("a"));  //  logs true
  console.log(isCharAVowel("k")) // this logs false because "k" is not a vowel.

  // Exercise 4: generateEmail()

  /*Create a function named generateEmail. It should take two strings: 
  a name and a domain. It should return a simple email address.
  
  Example: generateEmail('johnsmith', 'example.com') 
  should return 'johnsmith@example.com'.

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

function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
      return num1;
  } else if (num2 >= num1 && num2 >= num3) {
      return num2;
  } else {
      return num3;
  }
}

// Test with the given numbers
console.log(maxOfThree(6, 10, 4)); // Output is 10 which is the largest.

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

given bill amount of 30 and a tip percentage of 18

Complete the exercise in the space below:
*/

//Define a function calculateTip that accepts two arguments: billAmount and tipPercentage
//Convert the tipPercentage to a decimal by dividing it by 100.
//Calculate the tip amount by multiplying the billAmount by the decimal tip percentage and returning the tip amount
//

const billAmount = 60; // bill amount.
const tipPercentage = 15; // bill percentage

function calculateTip(billAmount, tipPercentage){
    const tipAmount = billAmount * (tipPercentage/100);
    return tipAmount;
}

console.log(calculateTip(billAmount, tipPercentage));

// EXERCISE 8: CONVERT TEMPERATURE ()
//TODO:
// creating a function named convertTemperature(),
// inserting the two arguments: a temperature and 
// a string representing the temperature scale,'C' for celicius and 'F' for fahrenheit.
// converting one temperature ecale into the other scale.

function convertTemperature(temp, scale){
  if (scale === 'C'){
    return temp * 9 / 5 + 32; // converting celsius to fahrenheit.
  }else {
    return (temp - 32) * 5 / 9; // the output is the conversion of fahrenheit into celsius.
  };
} 
console.log(convertTemperature(32, 'C'));

// EXERCISE 9: 

//TODO: 
// creating a function named basicCalculator()
// adding three arguments: two numbers and a string rep. an operation.
// Use/perfrom a chosen operation on the two numbers.

let num1 = 20;
let num2 = 8;

function basicCalculator(num1, num2, operation){
  switch (operation){
    case 'add':
      return num1 + num2;
  }

}

console.log(basicCalculator(num1, num2, "add")); // this return 30