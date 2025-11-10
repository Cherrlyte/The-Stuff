const n = isNaN(process.argv[2]) ? 0 : parseFloat(process.argv[2])

let final = 0
for(let i = n-1; i > 0; i--){
  if(i%3 === 0 || i%5 === 0){
    final += i
  }
}
console.log(final)