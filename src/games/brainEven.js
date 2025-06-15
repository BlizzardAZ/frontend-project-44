import { runGame } from '../index.js'
import { getRandomInt } from '../utils/randomInt.js'

function runBrainEvenGame() {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'
  function generateQuestionAnswer() {
    const num = getRandomInt(1, 100)

    const question = `Question: ${num}`
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no'

    return { question, correctAnswer }
  }

  runGame(gameDescription, generateQuestionAnswer)
}

export { runBrainEvenGame }
