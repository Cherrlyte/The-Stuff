const str = String(process.argv[2])

let total = 0
checkList = ['a', 'e', 'i', 'o', 'u']
for(let i in str){
  for(let x in checkList){
    if(str[i] === checkList[x]){
      total += 1
    }
  }
}
console.log(total)
