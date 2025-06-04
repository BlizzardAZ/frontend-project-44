import { runGame } from '../index.js'

function runBrainProgressionGame() {
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function createProgression(a1, d, length) {
    const progression = []
    for (let i = 1; i <= length; i++) {
      const an = a1 + d * (i - 1)
      progression.push(an)
    }
    return progression
  };

  const gameDescription = 'What number is missing in the progression?'

  function generateQuestionAnswer() {
    const a1 = getRandomInt(1, 100)
    const d = getRandomInt(1, 25)
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

    const question = `Question: ${progressionWithHiddenEl}`
    const correctAnswer = correctNum

    return { question, correctAnswer }
  }

  runGame(gameDescription, generateQuestionAnswer)
}

export { runBrainProgressionGame }
