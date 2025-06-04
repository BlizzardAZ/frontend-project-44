import readlineSync from 'readline-sync'

function runGame(gameDescription, generateQuestionAnswer) {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
  console.log(gameDescription)

  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = generateQuestionAnswer()
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer.toString().toLowerCase() === correctAnswer.toString().toLowerCase()) {
      console.log('Correct!')
    }
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export { runGame }
