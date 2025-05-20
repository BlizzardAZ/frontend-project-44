import readlineSync from 'readline-sync'

let userName

function greetUserByName() {
  userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
  return userName
};

function greetWinnerByName(userName) {
  console.log(`Congratulations, ${userName}!`)
};

function askRandomQuestion(question) {
  console.log(question)
};

function getAnswer() {
  let answer = readlineSync.question('Your answer: ')
  return answer
};

function getCorrectAnswer(x, y, operator) {
  switch (operator) {
    case '+':
      return getSum(x, y)
    case '-':
      return getDifference(x, y)
    case '*':
      return multiplication(x, y)
    default:
      return null
  };
};

function compareAnswers(userAnswer, correctAnswer) {
  if (String(userAnswer) === String(correctAnswer)) {
    console.log('Correct!')
  }
  else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
    process.exit()
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
};

function getSum(x, y) {
  let sum = x + y
  return sum
};

function getDifference(x, y) {
  let diff = x - y
  return diff
};

function multiplication(x, y) {
  let product = x * y
  return product
};

function getRandomMathOperator(arr) {
  const randomIndex = getRandomInt(0, arr.length - 1)
  return arr[randomIndex]
};

export { greetUserByName, askRandomQuestion, getAnswer, getCorrectAnswer, compareAnswers, greetWinnerByName, getRandomInt, getRandomMathOperator }
