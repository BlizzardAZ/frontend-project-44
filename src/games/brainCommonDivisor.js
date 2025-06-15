import { runGame } from '../index.js'
import { getRandomInt } from '../utils/randomInt.js'

function runCommonDivisorGame() {
  function getCommonDivisor(x, y) {
    if (x === 0) return y
    if (y === 0) return x
    if (x === y) return x

    if (x < y) {
      const temp = x
      x = y
      y = temp
    }

    while (y !== 0) {
      const temp = x % y
      x = y
      y = temp
    }
    return x
  }

  const gameDescription = 'Find the greatest common divisor of given numbers.'
  function generateQuestionAnswer() {
    const x = getRandomInt(1, 50)
    const y = getRandomInt(1, 50)

    const question = `Question: ${x} ${y}`
    const correctAnswer = getCommonDivisor(x, y)

    return { question, correctAnswer }
  }

  runGame(gameDescription, generateQuestionAnswer)
}

export { runCommonDivisorGame }
