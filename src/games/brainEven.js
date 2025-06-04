import { runGame } from '../index.js'

function runBrainEvenGame() {
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

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
