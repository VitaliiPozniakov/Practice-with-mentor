// function reverseNumber(number) {
//   let result;

//   const arr = String(number).split("");
//   const reverseArr = arr.reverse();
//   result = reverseArr.join("");
//   // return result

//   if (number < 0) {
//     const arr = String(number).split("");
//     arr.shift();
//     const reverseArr = arr.reverse();
//     reverseArr.unshift("-");
//     result = reverseArr.join("");
//   }
//   return result;
// }

// console.log(reverseNumber(12345));
// console.log(reverseNumber(-12345));

// // 12345 => 54321

// // -12345 => -54321



// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.


// const convert = (...argument) =>  argument.map((item) => 

//     typeof(item) === 'string' ? Number(item) :  String(item)

//         // if (typeof(item) === 'string') {
//         //    return Number(item)
//         // }

//         // if (typeof(item) === 'number') {
//         //   return  String(item)
//         // }
//     )





// console.log(convert('1', 2, 3, '4')) // [1, '2', '3', 4]

// / Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

const positiveSum = (arr) => arr.reduce((acc, number) => 
number > 0 ? acc += number : acc
  , 0)

  console.log(positiveSum([0, -3, 5, 7]))


