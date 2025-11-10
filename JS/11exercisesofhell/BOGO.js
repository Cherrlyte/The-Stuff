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

const n = isNaN(process.argv[2]) ? 123456 : parseFloat(process.argv[2])
let list = []
for(let i in n.toString){
  list.push(n.toString[i])
}

function checkIfSorted(list){
  let last = -1000000000
  for(let i in list){
    if(list[i] > last){
      return false
    }else{
      last = list[i]
    }
  }
  return true
}