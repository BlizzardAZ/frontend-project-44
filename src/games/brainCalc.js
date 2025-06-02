
import { getRandomInt, getRandomMathOperator } from './brainGamesLogic.js'
import { startBrainGames } from '../index.js'

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

function runBrainCalc() {
  startBrainGames(gameDescription, generateQuestionAnswer)
}

export { runBrainCalc }