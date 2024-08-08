const prompt = require('prompt-sync')()



// the questions you are answersing with some hints
const question = [
  {
    q: "what does snowfall talk about?",

    h: "drug dealer , LA 1983, money",

    A: "start of the crack epidemic in the US 1983 with main star being Franklin saint"

  },

  {
    q: "who gave franklin his first brick?",

    h: "franklin met this person off rob",

    A: "avi"
  },
  {
    q: "why did melody shoot franklin?",
    h: "family",
    A: "franklin shot her father"
  },
  {
    q: "what happens with franklin's money",
    h: "teddy",
    A: "teddy steal franklin money to mantain natural order."
  },
  {
    q: "how did franklin's mom end up in prison",
    h: "franlkin's money ",
    A: "she shot teddy so franklin can't have the money"
  },
  {
    q: "why did franklin go to prison? ",

    A: "he killed kevin"
  },

  {
    q: "why did melody shoot franklin?",

    h: "family",

    A: "franklin shot her father"
  },

  {
    q: "what happens with franklin's money",

    h: "teddy",

    A: "teddy steal franklin money to mantain natural order."
  },

  {
    q: "how did franklin's mom end up in prison",
    h: "franlkin's money ",
    A: "she shot teddy so franklin can't have the money"
  }
]







// closing if user wants to play again




let ua = prompt("how old are you")
ua = parseInt()
if (ua > 10) {
console.log("you cant play")
}else{
 ( age = 10 )
   console.log("play game")
   }
let user1 = prompt("do you want to play game")
if (user1 === "yes") {
  playgame()
}
// how the game is running
function askquestions() {
  for (let i = 0; i < question.length; i++) {
    console.log(question[i].q)
    let u = prompt("guess")
    if (u === question[i].A) {
      console.log("good job")
    } else {
      console.log("bad job")
    }
  }
}
// closing if user wants to play again
function playgame() {
  askquestions()
  let user = prompt("do you want to play again")
  while (user === "yes") {
    askquestions()
    user = prompt("do you want to play again")
  }
}



console.log("thanks for playing ")



