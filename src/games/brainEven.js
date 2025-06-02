// import { greetUserByName, askRandomQuestion, getAnswer, compareAnswers, greetWinnerByName, getRandomInt } from './brainGamesLogic.js'

// function isEvenGame() {
//   const userName = greetUserByName()

//   const iterNum = 3
//   let allAnswersCorrect = true

//   for (let i = 0; i < iterNum; i++) {
//     askRandomQuestion('Answer "yes" if the number is even, otherwise answer "no".')

//     const num = getRandomInt(0, 100)
//     console.log(`Question: ${num}`)

//     const userAnswer = getAnswer().toLowerCase()
//     const correctAnswer = (num % 2 === 0) ? 'yes' : 'no'

//     const isCorrect = compareAnswers(userAnswer, correctAnswer)
//     if (!isCorrect) {
//       console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
//       allAnswersCorrect = false
//       break
//     }
//   }
//   if (allAnswersCorrect) {
//     greetWinnerByName(userName)
//   }
// };

// export { isEvenGame }
