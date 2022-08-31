var readlineSync = require("readline-sync")
const chalk = require("chalk")
var score = 0
console.log("Welcome to DO YOU KNOW Shreyansh\n")
var userAnswer = readlineSync.question("May I take your name?\n")

var welcomeMessage = chalk.blue.bold("Welcome " +(userAnswer) +"\n")

console.log(welcomeMessage)
console.log(chalk.yellow("Lets start the quiz!\n"))

var highScores = 
[
 {
   name: "Ruchi",
   point: "5",
 },
 {
   name: "Sesadari",
   point:"4"
 },
 {
   name:"Ruchika",
   point:"3"
    
  } 
]
var quiz =
[  
question1 = {
  ques: "Is my age greater than 25? ",
  ans: "no"
},
 question2 = {
  ques: "Where do I live? ",
  ans: "mount abu"
},
 question3 = {
  ques: "Where was my college? ",
  ans: "shimla"
 },
 question4 = {
  ques: "What is my home name? ",
  ans: "shubham"
},
 question5 = {
  ques: "Who is my favorate hero?",
  ans: "hritik roshan"
},
  question6 ={
    ques:"who is my idol? ",
    ans:"swami vivekanand"
  }
]
function logic (alpha,beta)
{
  if (alpha === beta) {
    console.log(chalk.green("Yes! You are right"))
    score = score + 1
    console.log("Your score is : " + score)
  }
  else {
    console.log(chalk.red("You are Wrong"))
    console.log("Your score is : " + score)
  }
console.log("_____________________________\n")  
}
// calling fuction

for (var i = 0; i < quiz.length; i++) {
  var quist = quiz[i]
  var userAnswer1 = readlineSync.question(quist.ques +"\n")
  
  var game = logic(userAnswer1,quist.ans)
}


console.log("Thank you for playing.\n")

console.log(chalk.cyan("high scores are:\n"))


var count = 0
for (i=0;i<highScores.length;i++)
{
  var high = highScores[i]
  console.log(high.name + ": " + high.point + "\n")
  if (score > high.point){
    count = count +1
  } 
}  
console.log(chalk.magentaBright("Your score is: "+ score + "\n"))

if (count >= 3)
{
  console.log(chalk.yellowBright("congratulations! You scored highest \n"))
  console.log("DO share screenshort")
}
  