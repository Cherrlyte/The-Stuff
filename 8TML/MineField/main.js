let field = [[],[],[],[],[]]
let alive = true
let guessed = 0

for(let i=0; i < field.length; i++){
  const table = document.getElementById('mintab')
  const nrow = document.createElement('tr')
  nrow.setAttribute('id', i)
  for(let x=0; x <= 5; x++){
    const val = getRandomInteger(0,1)
    field[i][x] = val
    const ndata = document.createElement('td')
    ndata.setAttribute('id', x)
    ndata.innerHTML = val ? "B" : "N"
    nrow.append(ndata)
  }
  table.append(nrow)
}



while(alive){
  const col = prompt("Type in a column (0-4)")
  const lin = prompt("Type in a line (0-5)")
  if(lin > 5 ||lin < 0 || col > 4 || col < 0 || lin == "" || col == ''){
    alert("no.")
    continue
  }
  if(field[col][lin] == 1){
    let death=4
    do{
    death--
    alert('DEATH')}
    while(death >= 0)
    console.log(field)
    alive = false
    break;
  }
  else{
    if(guessed == 3){
      alert("That's enough, we aren't paying you more. Fuck off.")
      break
    }
    guessed++
    alert(`Line ${lin} at Col ${col} wasn't a mine, keep going.`)
    continue
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}