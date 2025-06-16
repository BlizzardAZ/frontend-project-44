import readlineSync from 'readline-sync'
import { brainGames } from './cli.js'

function runGame(gameDescription, generateQuestionAnswer) {
  const userName = brainGames()
  console.log(gameDescription)

  let iterNum = 3
  for (let i = 0; i < iterNum; i++) {
    const { question, correctAnswer } = generateQuestionAnswer()
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer.toString().toLowerCase() !== correctAnswer.toString().toLowerCase()) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}

export { runGame }
