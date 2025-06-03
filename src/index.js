import readlineSync from 'readline-sync'
import { runBrainCalc } from './games/brainCalc.js'

function startGames() {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')

  const gameName = readlineSync.question(' ')
  switch (gameName) {
    case 'brain-calc':
      runBrainCalc()
      break
    // case 'brain-even':
    //   runBrain()
    //   break
    // case 'brain-gcd':
    //   runBrain()
    //   break
    // case 'brain-prime':
    //   runBrain()
    //   break
    // case 'brain-progression':
    //   runBrain()
    //   break
    default:
      console.log('Enter correct game name')
  }
}

function runChosenGame(gameDescription, generateQuestionAnswer) {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
  console.log(gameDescription)

  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = generateQuestionAnswer()
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ')
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export { runChosenGame }
