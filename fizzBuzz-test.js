
// //TENARY 
// for (let i = 1; i <= 100; i++) {
//   const output = (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
//                  (i % 3 === 0) ? "Fizz" :
//                  (i % 5 === 0) ? "Buzz" : i;
//   console.log(output);
// }

// Basic
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// High Order Function 
Array.from({ length: 100 }, (_, index) => index + 1).map(number => (number % 3 === 0 && number % 5 === 0) ? 'FizzBuzz' : (number % 3 === 0) ? 'Fizz' : (number % 5 === 0) ? 'Buzz' : number).forEach(output => console.log(output));
