"4102 0808 8043 5620"

//create a new set of numbers by transforming each of the digits in the inputted credit card number. 

//Starting on the right and moving left, double every other digit. For example the digit 3 becomes 6.
// how to identify every other digit?



const input = "4102080880435620";
function luhnAlgorithm(cardNumbers) {
  let step1Array = [];
  step1Array = input.split("");
  let step2Array = step1Array.map(elem=> parseInt(elem, 10));
  let step3Array = [];
  
  for (let counter = 0; counter < step1Array.length; counter++) {
    if (counter % 2 === 1) {
      doubledVal=step2Array[counter]*2;
      step3Array.push(doubledVal);
    }
    else  {
      step3Array.push(step2Array[counter]);
    };
    
  };
  return step3Array;
}

luhnAlgorithm(input);



// If the result of the doubled digit is a double digit number, add together each digit 

// Next, sum all of the digits in the new transformed set of numbers

// If the resulting number ends in a zero, the card number is valid. If the number does NOT end in a zero, the card number is NOT valid. 



"This card number is not valid."
"This card number is valid."