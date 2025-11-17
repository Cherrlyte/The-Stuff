const n = isNaN(process.argv[2]) ? 164253 : BigInt(process.argv[2]) //We fetch the numbers to sort from the user using Node Arguments

let lis = [] //We make an empty list.
for (let i in String(n)) {
  lis.push(String(n)[i]) //We turn the given input into a string and push each character into a list.
}

function checkIfSorted(list) {
  let last = -Infinity //-Infinity for the first number so the user can use whatever number they want.
  for (let i in list) {
    if (list[i] < last) { return false } //If last is bigger than current, return false.
    else {
      last = list[i] //Else, set current number as last and continue down the list.
    }
  }
  return true //If it goes through the list and finds nothing, return true.
}

function badSort(list) {
  let last = -Infinity
  for (let i in list) {
    if (list[i] < last) {
      console.log(`Swapping ${list[i]} with ${last}`)
      list[i-1] = list[i]
      list[i] = last
    } 
    else {
      last = list[i]
    }
  }
}

let sorted = checkIfSorted(lis) //Check if list isn't sorted by default.
let trynum = 0 //We gotta keep track of tries, no?

while (!sorted) { //while not sorted
  trynum++ //increase try number
  console.log(`Unsorted! ${lis} (Attempt ${trynum})`) //log disappointment
  badSort(lis) //shuffle the list
  sorted = checkIfSorted(lis) //check if sorted
}

trynum++ //increase try number
console.log(`Should be sorted! ${lis} (Attempt ${trynum})`) //log success