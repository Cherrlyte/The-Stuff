import random from "random"
import ppt from 'input'

console.log("The quest for The Wall of Piss")

console.log("You wake up in the middle of nowhere, and you know exactly why. You have one quest: Get the Wall of Piss.")
console.log("You find yourself with two choices: Go left, towards the wall itself, or go right, through a shortcut.")
console.log("-- ANSWERS ARE NOT CASE SENSITIVE! --")
const answer = await ppt.text("LEFT or RIGHT?")

if(answer.toLowerCase() == "left"){
  console.log("You go left, fall in a pit and die.")
}else if(answer.toLowerCase() == 'right'){
  console.log("You go right, fall in a pit and die.")
}else{
  console.log("You tried being different, fell into a pit and died. Don't try to be unique.")
}