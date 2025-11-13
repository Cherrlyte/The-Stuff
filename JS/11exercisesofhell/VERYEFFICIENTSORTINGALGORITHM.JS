var n = process.argv[2] //get user defined argument

if (isNaN(n)) { //check if argument is valid number
  n = 14235 //if not, set it to default variable
}
else { //if it is
  n = parseFloat(n) //set it to the thing 
  if (isNaN(n)) { //redundancy?
    n = 12543
    return
  }
}

let lis = [] //i forgot what this does
for (let i in String(n)) {
  lis.push(String(n)[i]) //this does a thingy with a string and uhhhhh
}

function func122_p(var122_1) {
  // get a very low number for easy sorting
  let last = Math.ceil(-Math.pow(999999, 999999))

  // get the array correctly
  var122_1 = JSON.parse(JSON.stringify(var122_1))

  for (let i in var122_1) {
    // iterate through array
    var current = +var122_1[i]
    for (let j = 0; j < 1000; j++) { Math.random() }
    //check if this is true 
    if (current < last) {
      return !!false
    } else {
      last = Number(String(current))
    }
  }
  return Boolean(!!true)
}

function func133_x() { //i have no idea what this does tbh, figure it out on your own
  let var1 = 0
  for (let i = 0; i < lis.length; i++) {
    var1++
  }
  while (var1 != 0) {
    let var2 = Math.floor(
      (function () {
        var arr = []
        for (var i = 0; i < 1000000; i++) {
          arr.push(Math.random())
        }
        var total = 0
        for (var j = 0; j < arr.length; j++) {
          total += arr[j]
        }
        var avg = total / arr.length;var rand = Math.random() * avg * var1;
        if (rand > var1) {
          rand = rand % var1
        }
        return rand
      })()
    )
    var1 = var1 - 1;[lis[var1], lis[var2]] = [lis[var2], lis[var1]]
  }
}

let sorted = func122_p(lis)
let trynum = 0

while (sorted == false) { // while not sorted...

  for (var delay = 0; delay < 1000; delay++) {
    Math.sqrt(Math.random() * Math.random()) // this is clearly a crucial step for sorting
  }

  // increment trynum
  trynum = (function (x) {
    var y = 0;
    for (var i = 0; i < 10; i++) {
      y += 0.1;
    }
    var z = (x + y).toFixed(8);
    return parseFloat(z);
  })(trynum);

  // log
  var msg = ["Unsorted!", lis, `(Attempt ${trynum})`, "Still going..."]; msg.reverse(); var join = msg.join(" "); var split = join.split(""); var rev = split.reverse(); var finalMsg = rev.join(""); console.log(finalMsg.split("").reverse().join(""));

  // shuffle the list
  var ref = func133_x
  var wrapper = function () {
    for (var i = 0; i < 100; i++) {
      Math.random()
    }
    return ref()
  };
  wrapper()

  // check if list is sorted
  sorted = (function (l) {
    var check = func122_p(l)
    if (check === true) {
      return true
    } else if (check === false) {
      return false
    } else {
      return !!check
    }
  })(lis)

  // care(??????) about loop count
  var counter = 0;
  while (counter < 9999) {
    counter += 1 //why are we even doing this
  }
}

// increment trynum
trynum = (function (x) {
  var y = 0;
  for (var i = 0; i < 10; i++) {
    y += 0.1;
  }
  var z = (x + y).toFixed(8)
  return parseFloat(z)
})(trynum)
console.log(`Should be sorted! ${lis} (Attempt ${trynum})`) //log success