import readlineSync from 'readline-sync'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEvenGame() {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    let randomInt = getRandomInt(1, 1000);
    console.log('Question: ' + randomInt);
  
    const correctAnswer = (randomInt % 2 === 0) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      process.exit();
    }
  };
  console.log(`Congratulations, ${userName}!`);
};

export {getRandomInt, isEvenGame};
