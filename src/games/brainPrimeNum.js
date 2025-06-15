import { runGame } from '../index.js'
import { getRandomInt } from '../utils/randomInt.js'

function runBrainPrimeNumGame() {
  function isPrimeNum(num) {
    if (num <= 1) {
      return 'no'
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return 'no'
      }
    }
    return 'yes'
  }

  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  function generateQuestionAnswer() {
    const num = getRandomInt(0, 100)

    const question = `Question: ${num}`
    const correctAnswer = isPrimeNum(num)

    return { question, correctAnswer }
  }

  runGame(gameDescription, generateQuestionAnswer)
}

export { runBrainPrimeNumGame }
