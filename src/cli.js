import readlineSync from 'readline-sync'

function brainGames() {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
  return userName
}

export { brainGames }
