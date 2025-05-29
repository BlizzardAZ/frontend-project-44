import { greetUserByName, askRandomQuestion, getAnswer, isPrimeNum, compareAnswers, greetWinnerByName, getRandomInt } from './brainGamesLogic.js'

function isPrimeGame() {
  const userName = greetUserByName()
  const iterNum = 3
  let allAnswersCorrect = true

  for (let i = 0; i < iterNum; i++) {
    askRandomQuestion('Answer "yes" if given number is prime. Otherwise answer "no".')

    const num = getRandomInt(0, 100)
    console.log(`Question: ${num}`)

    const userAnswer = getAnswer().toLowerCase()
    const correctAnswer = isPrimeNum(num)
    const isCorrect = compareAnswers(userAnswer, correctAnswer)
    if (!isCorrect) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
      allAnswersCorrect = false
      break
    }
  };
  if (allAnswersCorrect) {
    greetWinnerByName(userName)
  };
};

export { isPrimeGame }
