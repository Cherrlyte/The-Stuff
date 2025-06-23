let rngTable = {
  'STR': 0,
  'SPD': 0,
  'LYT': 0,
  'KNW': 0,
  'DEF': 0,
  'LIK': 0
}

let modTable = {
  'STR': 0,
  'SPD': 0,
  'LYT': 0,
  'KNW': 0,
  'DEF': 0,
  'LIK': 0
}

let totTable = {
  'STR': 0,
  'SPD': 0,
  'LYT': 0,
  'KNW': 0,
  'DEF': 0,
  'LIK': 0
}

function randomNumberGenerator(max, min, quant){
  quant = quant != null ? quant : 
  min = min != null ? min : 1
  max = max != null ? max : 100

  if(quant > 1){
    let arr = []
    for(let i = 0; i < quant; i++){
      arr[i] = Math.floor(Math.random() * (max-min+1) + min)
    }
    return arr
  }else{
    return Math.floor(Math.random() * (max-min+1) + min)
  }
}

function genMod(val){
  if(val > 15){
    return Math.round(1+(val/1.2))
  }else if(val > 7){
    return (0+(val/1.2)).toFixed(0)
  }else{
    return Math.round(-1 + (val/1.2))
  }
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

final()

