import { greetUserByName, askRandomQuestion, getAnswer, createProgression, compareAnswers, greetWinnerByName, getRandomInt } from './brainGamesLogic.js'

function guessProgressionNumGame() {
  console.log('Welcome to the Brain Games!')
  const userName = greetUserByName()

  const iterNum = 3
  let allAnswersCorrect = true

  for (let i = 0; i < iterNum; i++) {
    askRandomQuestion('What number is missing in the progression?')

    const a1 = getRandomInt(1, 100)
    const d = getRandomInt(1, 10)
    const length = getRandomInt(5, 10)
    const progression = createProgression(a1, d, length)

    let correctNum
    function hideProgressionEl(progression, length) {
      const hiddenElementIndex = getRandomInt(0, length - 1)
      correctNum = progression[hiddenElementIndex]
      progression.splice(hiddenElementIndex, 1, '..')
      return progression.join(' ')
    };

    const progressionWithHiddenEl = hideProgressionEl(progression, length)
    askRandomQuestion(`Question: ${progressionWithHiddenEl}`)

    const userAnswer = getAnswer()
    const correctAnswer = correctNum

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

export { guessProgressionNumGame }
