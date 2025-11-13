const n = isNaN(process.argv[2]) ? 5 : parseFloat(process.argv[2])

if(n <= 0){
  console.log("No factorial for zero (0! = 1) or anything lower than zero.")
  return
}
let fin = n
for(let i = 2; i < n+1; i++){
  fin += (n-i)*fin
}
console.log(fin)