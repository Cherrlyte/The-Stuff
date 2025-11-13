const n = isNaN(process.argv[2]) ? 123456 : parseFloat(process.argv[2])
const stringed = String(n)
let nw = ''
for(let i = stringed.length-1; i > -1; i--){
  nw += stringed[i]
}
if(stringed === nw){
  console.log(`${n} is a palindrome.`)
}else{
  console.log(`${n} is not a palindrome.`)
}