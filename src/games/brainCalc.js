import { greetUserByName, askRandomQuestion, getAnswer, calculateResult, compareAnswers, greetWinnerByName, getRandomInt, getRandomMathOperator } from './brainGamesLogic.js'

function CalculatorGame() {
  console.log('Welcome to the Brain Games!')
  const userName = greetUserByName()

  const iterNum = 3
  let allAnswersCorrect = true

  for (let i = 0; i < iterNum; i++) {
    const x = getRandomInt(1, 50)
    const y = getRandomInt(1, 10)
    const operator = getRandomMathOperator(['+', '-', '*'])

    askRandomQuestion('What is the result of the expression?')
    askRandomQuestion(`Question: ${x} ${operator} ${y}`)

    const userAnswer = getAnswer()
    const correctAnswer = calculateResult(x, y, operator)

    const isCorrect = compareAnswers(userAnswer, correctAnswer)
    if (!isCorrect) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
      allAnswersCorrect = false
      break
    }
  }
  if (allAnswersCorrect) {
    greetWinnerByName(userName)
  }
};

export { CalculatorGame }
