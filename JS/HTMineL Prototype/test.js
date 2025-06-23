import random from "random"
import ppt from 'input'

let field = [[],[],[],[],[]]
let alive = true
let guessed = 0

for(let i=0; i < field.length; i++){
  for(let x=0; x <= 5; x++){
    field[i][x] = (random.int(0, 1))
  }
}

while(alive){
  const col = await ppt.text("Type in a column (0-4): ")
  const lin = await ppt.text("Type in a line (0-5): ")
  if(lin > 5 ||lin < 0 || col > 4 || col < 0 || lin == "" || col == '' || col == null || lin == null){
    console.log("no.")
    continue
  }
  if(field[col][lin] == 1){
    let death=150

    do{
    death--
    console.log('DEATH')}
    while(death >= 0)

    console.log(field)
    alive = false
    break;
  }
  else{
    if(guessed == 3){
      console.log("That's enough, we aren't paying you more. Fuck off.")
      break
    }
    guessed++
    console.log(`Line ${lin} at Col ${col} wasn't a mine, keep going.`)
    continue
  }
}


