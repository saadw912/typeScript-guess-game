#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep=()=>new Promise((res,rej)=>setTimeout(res,2000));
// const sleep=(ms=2000)=>new Promise((res,rej)=>setTimeout(res,ms));

async function welcome() {
    const msg=chalkAnimation.rainbow("lets start game...!")
    await sleep();
    msg.stop();
}
await welcome();

async function askQuestion() {
    let playerLife=3;
    let randomNumber:number=Math.floor(Math.random()*10+1)
   
    do{
        
        playerLife--;
        console.log(`Player Life Left ${playerLife}`);
        var question= await inquirer.prompt([
            {
                type:"number",
                name:"user_num",
                message:"select any number between 1-10",
               
            }
        ]);
    if(question.user_num==randomNumber)
    {
        console.log(chalk.green("congratulation..! you guess right number"))
    }
    else if(question.user_num<randomNumber)
    {
        console.log(chalk.red(`your number "${question.user_num}" is less then guess number`))
    }
    else if(question.user_num>randomNumber)
    {
        console.log(chalk.red(`your number "${question.user_num}" is greater then guess number`))
    }
    
}
while(playerLife>0 && randomNumber != question.user_num);
if(playerLife==0  && randomNumber != question.user_num){
console.log(chalk.gray("GAME OVER..."));
console.log(chalk.blue(`Guess number ="${randomNumber}"`));

}
}

async function againStart() {
    do {
        console.clear();
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "list",
            name: "restart",
            message: "Do you want to continue?",
            choices: ["yes", "No"]
        });
    } while (again.restart == "yes");
}
againStart();

