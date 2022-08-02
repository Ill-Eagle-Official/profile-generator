const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are cool too!', (answer1) => {
  console.log(`Oh, your name is ${answer1}? Cool!`);
  rl.question('What is your favourite hobby?', (answer2) => {
    console.log(`${answer2} huh? That's cool!`);
    rl.question('What kinds of music do you enjoy most?', (answer3) => {
      console.log(`Oh nice, ${answer3} is/are awesome! Like funk the most.`);
      rl.question('Which meal do you like the best? Breakfast, lunch, or dinner?', (answer4) => {
        console.log(`${answer4} is delicious!`);
        rl.question('What do you like to eat for that meal?', (answer5) => {
          console.log(`${answer5}, good choice! I like that too.`);
          rl.question('How about sports, which one is your favourite?', (answer6) => {
            console.log(`${answer6} is awesome!`);
            rl.question('Alright, last one! What would you say your superpower is? What do you think you are the absolute best at?', (answer7) => {
              console.log(`${answer7} is a great thing to be good at!`);
              console.log(`${answer1} loves listening to ${answer3}, especially while ${answer2}. They love to eat ${answer5} for ${answer4}, probably right after a game of ${answer6}, and is the absolute best at ${answer7} `), 
              rl.close();
            });
          });
        });
      });
    });
  });
});
