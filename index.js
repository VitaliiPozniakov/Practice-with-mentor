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

// const getSums = (arr) => arr.reduce((acc, item, index) => index === 0 ? [item] : [...acc, acc[index-1] + item]
//    ,[])

// console.log(getSums([1, 2, 3, 4, 5]))
// // [1, 2, 3, 4, 5] => [1, 3, 6, 10, 15]

// const user = [
//    {
//       id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       id: "249b6175-5c30-44c6-b154-f120923736f5",
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       id: "e1bf46ab-7168-491e-925e-f01e21394812",
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
// ]

// const resultObjectKeys = Object.keys(users[0]);

// const resultObject = {};

// // for (let i = 0; i < resultObjectKeys.length; i += 1) {

// //   resultObject[resultObjectKeys[i]] = [users[i].resultObjectKeys[i]];

// // }
// for (const key of resultObjectKeys) {
//    resultObject[key] = [];
//  }

//  for (key in resultObject) {
//    for (const user of users) {
//      resultObject[key].push(user[key]);
//    }
//  }

//  for (key in resultObject) {
//    resultObject[key] = resultObject[key].flatMap((item) => item);
//    resultObject[key] = resultObject[key].filter(
//      (item, index, array) => array.indexOf(item) === index
//    );
//  }

//  console.log(resultObject);

class Student {
  #name;
  #email;
  #homeworkResults;

  constructor(name, email) {
    this.#name = name;
    this.#email = email;
    this.#homeworkResults = [];
  }

  getName() {
    return this.#name;
  }
  getEmail() {
    return this.#email;
  }

  getHomeworkResults() {
    return this.#homeworkResults;
  }

  addHomeworkResult(topic, success) {
   //   console.log(topic, success)f
    this.#homeworkResults.push({ topic, success });
  }
}

const student = new Student("Taras", "taras@gmail.com");

student.addHomeworkResult("HTML", true);

// console.log(student.getHomeworkResults())

const listOfStudents = [
  {
    name: "John",
    email: "john@gmail.com",
  },
  {
    name: "Jane",
    email: "jane@gmail.com",
  },
  {
    name: "Jack",
    email: "jack@gmail.com",
  },
  {
    name: "Mary",
    email: "mary@gmail.com",
  },
  {
    name: "Robert",
    email: "robert@gmail.com",
  },
  {
    name: "Ann",
    email: "ann@gmail.com",
  },
  {
    name: "Brad",
    email: "brad@gmail.com",
  },
  {
    name: "Lisa",
    email: "lisa@gmail.com",
  },
  {
    name: "Matthew",
    email: "matthew@gmail.com",
  },
  {
    name: "Sandra",
    email: "sandra@gmail.com",
  },
];

const homeworkResults = [
  {
    topic: "HTML Basics",
    results: [
      {
        email: "john@gmail.com",
        success: true,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: true,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: true,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "CSS Basics",
    results: [
      {
        email: "john@gmail.com",
        success: false,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: false,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: true,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: false,
      },
      {
        email: "matthew@gmail.com",
        success: true,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "JS Basics",
    results: [
      {
        email: "john@gmail.com",
        success: true,
      },
      {
        email: "jane@gmail.com",
        success: false,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: false,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: false,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "DOM",
    results: [
      {
        email: "john@gmail.com",
        success: false,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: true,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: false,
      },
      {
        email: "ann@gmail.com",
        success: true,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: false,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
  {
    topic: "AJAX",
    results: [
      {
        email: "john@gmail.com",
        success: false,
      },
      {
        email: "jane@gmail.com",
        success: true,
      },
      {
        email: "jack@gmail.com",
        success: false,
      },
      {
        email: "mary@gmail.com",
        success: true,
      },
      {
        email: "robert@gmail.com",
        success: true,
      },
      {
        email: "ann@gmail.com",
        success: false,
      },
      {
        email: "brad@gmail.com",
        success: true,
      },
      {
        email: "lisa@gmail.com",
        success: true,
      },
      {
        email: "matthew@gmail.com",
        success: true,
      },
      {
        email: "sandra@gmail.com",
        success: true,
      },
    ],
  },
];

class ItSchool {
  #students;
  #failedLimit;

  constructor(students, failedLimit) {
    this.#students = students;
    this.#failedLimit = failedLimit;
  }

  getSuperStudents() {
    return this.#students.map(
      (student) => new Student(student.name, student.email)
    );
  }

  printStudentsList() {
    //  console.log(this.getSuperStudents())
    const superStudents = this.getSuperStudents();
    superStudents.forEach((student) => {
      console.log(`name: ${student.getName()}, email: ${student.getEmail()} `);
      console.log(student.getHomeworkResults());
    });
  }

  addHomeworkResults(homeworkResults) {
   //   console.log('123')
    const superStudents = this.getSuperStudents();
   //  console.log(superStudents)
    superStudents.forEach((student) => {
      //  console.log(student)
      homeworkResults.results.forEach((result) => {
         // console.log(result)
        if (result.email === student.getEmail()) {
         //   console.log('1')
         console.log(homeworkResults.topic, result.success)
          student.addHomeworkResult(homeworkResults.topic, result.success);
        }
      });
    });
  }
}

const itSchool = new ItSchool(listOfStudents, 1);

itSchool.addHomeworkResults(homeworkResults[0]);

itSchool.printStudentsList();
