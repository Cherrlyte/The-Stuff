const n = isNaN(process.argv[2]) ? 123456 : parseFloat(process.argv[2])
if(Math.sqrt(n)%1 === 0){
  console.log(`Perfect root. ${Math.sqrt(n)}`)
}else{
  console.log(`Imperfect root. ~${Math.sqrt(n)}`)
}