import readlineSync from 'readline-sync'
import { brainGames } from './cli.js'
import { runBrainCalc } from './games/brainCalc.js'

function startBrainGames(gameDescription, generateQuestionAnswer) {
    brainGames()

    const chosenGame = readlineSync.question('')
    switch (chosenGame) {
        case 'brain-calc':
            runBrainCalc()
        case 'brain-even':
            ?????
        case 'brain-gcd':
            ?????
        case 'brain-prime':
            ?????
        case 'brain-progression':
            ?????
    }
    
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name? ')
    console.log('Hello, ' + userName + '!')

    for (let i = 0; i < 3; i++) {
        console.log(gameDescription)
        const userAnswer = readlineSync.question('Your answer: ')
        if (String(userAnswer) === String(correctAnswer)) {
            console.log('Correct!')
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`)
            break
        }
    }
    console.log(`Congratulations, ${userName}!`)
}

export { startBrainGames}