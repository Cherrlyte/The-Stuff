const n1 = isNaN(process.argv[2]) ? 0 : parseFloat(process.argv[2])
const n2 = isNaN(process.argv[3]) ? 10 : parseFloat(process.argv[3])
if(n1 > n2){
  console.log(`n1 is bigger than n2!`)
  return
}

let results = []
for(let i = n1; i < n2+1; i++){
  if(i%2 === 0){
    results.push(i)
  }
}
console.log(results.toString())