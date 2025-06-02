// import { greetUserByName, askRandomQuestion, getAnswer, getCommonDivisor, compareAnswers, greetWinnerByName, getRandomInt } from './brainGamesLogic.js'

// function getCommonDivisorGame() {
//   const userName = greetUserByName()

//   const iterNum = 3
//   let allAnswersCorrect = true

//   for (let i = 0; i < iterNum; i++) {
//     const x = getRandomInt(1, 100)
//     const y = getRandomInt(1, 100)

//     askRandomQuestion('Find the greatest common divisor of given numbers.')
//     askRandomQuestion(`Question: ${x} ${y}`)

//     const userAnswer = getAnswer()
//     const correctAnswer = getCommonDivisor(x, y)

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

// export { getCommonDivisorGame }
