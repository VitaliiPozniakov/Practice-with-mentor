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

// const positiveSum = (arr) => arr.reduce((acc, number) =>
// number > 0 ? acc += number : acc
//   , 0)

//   console.log(positiveSum([0, -3, 5, 7]))

// / Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = (word, letter) => word.toLowerCase().split("").reduce((acc, item) => (item === letter ? (acc += 1) : acc), 0);

//   // console.log(arr);
// ;

// console.log(letterCount("", "z"));

// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = (arrOfResults) => {
//   const arr = arrOfResults.map(item => item.split(':'))
//   // console.log(arr)

// // const arrThreePoints = arr.filter(item => item[0] > item[1]).length * 3
// // const arrOnePoint = arr.filter(item => item[0] === item[1]).length

// return arr.filter(item => item[0] > item[1]).length * 3 + arr.filter(item => item[0] === item[1]).length
// //  return arr.reduce((acc,item) => {
// // if (item[0] > item[1]) {
// //  return acc + 3
// // }
// // if (item[0] === item[1]) {
// //  return acc + 1
// // }

// // return acc
// //   }, 0)
 

// }

// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']))


// const getSums = (arr) => {
//   let result = []


//   arr.reduce((acc, item) => {
//   console.log(acc)
// console.log(result)
//  result.push(acc + item)
// return acc + item
  
   
//   } ,0)

//   return result
// }

// console.log(getSums([1, 2, 3, 4, 5]))
// // [1, 2, 3, 4, 5] => [1, 3, 6, 10, 15]


const getSums = (arr) => arr.reduce((acc, item, index) => index === 0 ? [item] : [...acc, acc[index-1] + item]
   ,[])

   [1, 3, ]
   


console.log(getSums([1, 2, 3, 4, 5]))
// [1, 2, 3, 4, 5] => [1, 3, 6, 10, 15]