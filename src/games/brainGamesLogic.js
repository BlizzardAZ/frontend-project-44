// import readlineSync from 'readline-sync'

// let userName

// function greetUserByName() {
//   // console.log('Welcome to the Brain Games!')
//   userName = readlineSync.question('May I have your name? ')
//   console.log('Hello, ' + userName + '!')
//   return userName
// };

// function greetWinnerByName(userName) {
//   console.log(`Congratulations, ${userName}!`)
// };

// function askRandomQuestion(question) {
//   console.log(question)
// };

// function getAnswer() {
//   let answer = readlineSync.question('Your answer: ')
//   return answer
// };

// function calculateResult(x, y, operator) {
//   switch (operator) {
//     case '+':
//       return getSum(x, y)
//     case '-':
//       return getDifference(x, y)
//     case '*':
//       return multiplication(x, y)
//     default:
//       return null
//   };
// };

// function compareAnswers(userAnswer, correctAnswer) {
//   if (String(userAnswer) === String(correctAnswer)) {
//     console.log('Correct!')
//     return true
//   }
//   else {
//     return false
//   }
// };

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
};

// function getSum(x, y) {
//   let sum = x + y
//   return sum
// };

// function getDifference(x, y) {
//   let diff = x - y
//   return diff
// };

// function multiplication(x, y) {
//   let product = x * y
//   return product
// };

function getRandomMathOperator(arr) {
  const randomIndex = getRandomInt(0, arr.length - 1)
  return arr[randomIndex]
};

// function getCommonDivisor(x, y) {
//   if (x === 0) return y
//   if (y === 0) return x
//   if (x === y) return x

//   if (x < y) {
//     const temp = x
//     x = y
//     y = temp
//   }

//   while (y !== 0) {
//     const temp = x % y
//     x = y
//     y = temp
//   }
//   return x
// };

// function createProgression(a1, d, length) {
//   const progression = []
//   for (let i = 1; i <= length; i++) {
//     const an = a1 + d * (i - 1)
//     progression.push(an)
//   }
//   return progression
// };

// function isPrimeNum(num) {
//   if (num <= 1) {
//     return 'no'
//   };
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return 'no'
//     }
//   }
//   return 'yes'
// }

export { greetUserByName, askRandomQuestion, getAnswer, calculateResult, createProgression, isPrimeNum, compareAnswers, greetWinnerByName, getRandomInt, getRandomMathOperator, getCommonDivisor }
