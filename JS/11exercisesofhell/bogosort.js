const n = isNaN(process.argv[2]) ? 164253 : parseFloat(process.argv[2]) //We fetch the numbers to sort from the user using Node Arguments
let lis = [] //We make an empty list.
for(let i in String(n)){
  lis.push(String(n)[i]) //We turn the given input into a string and push each character into a list.
}

function checkIfSorted(list){
  let last = -Infinity //-Infinity for the first number so the user can use whatever number they want.
  for(let i in list){
    if(list[i] < last){ return false } //If last is bigger than current, return false.
    else{
      last = list[i] //Else, set current number as last and continue down the list.
    }
  }
  return true //If it goes through the list and finds nothing, return true.
}

function badShuffle(){
  let index = lis.length //Set index to list lenght.
  while(index!=0){ //While index is not zero...
    let randIndex = Math.floor(Math.random()*index) //Get a random number based from the index.
    index-- //Reduce index.
    [lis[index], lis[randIndex]] = [lis[randIndex], lis[index]] //Replace item from index with item from random index.
  }
}

let sorted = checkIfSorted(lis) //Check if list isn't sorted by default.
let trynum = 0 //We gotta keep track of tries, no?

while(!sorted){ //while not sorted
  trynum++ //increase try number
  console.log(`Unsorted! ${lis} (Attempt ${trynum})`) //log disappointment
  badShuffle(lis) //shuffle the list
  sorted = checkIfSorted(lis) //check if sorted
}

trynum++ //increase try number
console.log(`Should be sorted! ${lis} (Attempt ${trynum})`) //log success