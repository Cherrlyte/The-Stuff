let rngTable = {
  'STR': 0,
  'SPD': 0,
  'DEF': 0,
  'KNW': 0,
  'PWR': 0,
  'LIK': 0
}

let modTable = {
  'STR': 0,
  'SPD': 0,
  'DEF': 0,
  'KNW': 0,
  'PWR': 0,
  'LIK': 0
}

let totTable = {
  'STR': 0,
  'SPD': 0,
  'DEF': 0,
  'KNW': 0,
  'PWR': 0,
  'LIK': 0
}

function randomNumberGenerator(max, min){
  min = min != null ? min : 1
  max = max != null ? max : 100
  return Math.floor(Math.random() * (max-min+1) + min)
}

function genMod(val){
  const gen = Math.floor((val-10)/2)
  return gen > 0 ? gen : 1
}

function final(){
  for(i in totTable){
    rngTable[i] = randomNumberGenerator(20)
    modTable[i] = genMod(rngTable[i])
    totTable[i] = parseInt(rngTable[i]) + parseInt(modTable[i])
  }
  console.log(`RNG Table:`)
  console.log(rngTable)
  console.log(`Modifier Table:`)
  console.log(modTable)
  console.log(`Total Table:`)
  console.log(totTable)
}

function finalHTML(){
  for(i in totTable){
    rngTable[i] = randomNumberGenerator(20)
    modTable[i] = genMod(rngTable[i])
    totTable[i] = parseInt(rngTable[i]) * parseInt(modTable[i])
    document.getElementById(`${i}RNG`).value = rngTable[i]
    document.getElementById(`${i}MOD`).value = modTable[i]
    document.getElementById(`${i}TOT`).value = totTable[i]
  }
}

final()

