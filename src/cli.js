import readlineSync from 'readline-sync'

export default function userGreeting() {
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
}
