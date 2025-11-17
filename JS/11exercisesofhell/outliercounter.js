const n = isNaN(process.argv[2]) ? 1223334444555566 : BigInt(process.argv[2])
let amount = {};
let lis = []
for(let i in String(n)){
  lis.push(String(n)[i])
}

for (const i of lis) {
  amount[i] = (amount[i] || 0) + 1;
}

console.log(amount);