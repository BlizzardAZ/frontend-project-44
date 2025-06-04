import { runGame } from '../index.js'

function runBrainCalcGame() {
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  };

  function getRandomMathOperator(arr) {
    const randomIndex = getRandomInt(0, arr.length - 1)
    return arr[randomIndex]
  };

  const gameDescription = 'What is the result of the expression?'
  function generateQuestionAnswer() {
    const x = getRandomInt(1, 50)
    const y = getRandomInt(1, 10)
    const operator = getRandomMathOperator(['+', '-', '*'])
    const question = `Question: ${x} ${operator} ${y}`

    let correctAnswer
    switch (operator) {
      case '+':
        correctAnswer = x + y
        break
      case '-':
        correctAnswer = x - y
        break
      case '*':
        correctAnswer = x * y
        break
      default:
        return null
    }
    return { question, correctAnswer }
  }

  runGame(gameDescription, generateQuestionAnswer)
}

export { runBrainCalcGame }
