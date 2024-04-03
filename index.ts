#! /usr/bin/env node    //use this command to public on npm
import inquirer from "inquirer";
import chalk from "chalk";

// Generate a random number between 0 and 1
let guess: boolean = false;
let limit = 0
console.log("*****************************************")
console.log(chalk.yellow("\tGuess the Number\t"))
console.log("*****************************************")
while (guess === false && limit <5 ) {
  const randomNumber: number = Math.floor(Math.random() * 50) + 1;
  // taking user input using inquirer module
  const answer = await inquirer.prompt([
    {
      name: "guessnumber",
      type: "number",
      message: chalk.blue("Guess a random number: "), // chalk is used to change color of message display on the screen
    },
  ]);

  if (randomNumber === answer.guessnumber) {
    console.log(chalk.green("Correct guess,Welldone!!"));
    guess = true;
  } else {
   console.log( chalk.red("Incorrect guess,Try again!"));
   limit ++
  }
}
if(limit===5)
  {
    console.log(chalk.red("Maximum limit reached.You lost the game!"))
  }
