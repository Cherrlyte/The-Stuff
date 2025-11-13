const n = isNaN(process.argv[2]) ? 21 : parseFloat(process.argv[2])

lis = [0, 1]
let a = 0
let b = 1
for(let i = 0; b < n; i++){
  let c = a + b
  a = b
  b = c
  lis.push(c)
}
if(lis[lis.length-1] > n || lis[lis.length-1] < n){
  console.log("Exact number could not be found, returning nearest or next.")
}
console.log(`${lis}`)