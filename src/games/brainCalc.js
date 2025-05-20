import { greetUserByName, askRandomQuestion, getAnswer, getCorrectAnswer, compareAnswers, greetWinnerByName, getRandomInt, getRandomMathOperator } from './brainGamesLogic.js'

function brainCalculator() {
  const userName = greetUserByName()

  const iterNum = 3

  for (let i = 0; i < iterNum; i++) {
    const x = getRandomInt(1, 50)
    const y = getRandomInt(1, 10)
    const operator = getRandomMathOperator(['+', '-', '*'])

    askRandomQuestion('What is the result of the expression?')
    askRandomQuestion(`Question: ${x} ${operator} ${y}`)

    const userAnswer = getAnswer()
    const correctAnswer = getCorrectAnswer(x, y, operator)

    compareAnswers(userAnswer, correctAnswer)
  };
  greetWinnerByName(userName)
};

export { brainCalculator }
