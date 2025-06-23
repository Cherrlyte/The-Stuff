function rectA(b, h){
  let a = b * h;
  return a;
}
function sqrA(s){
  let a = s**2;
  return a;
}

console.log(`The area of a 15x4 rectangle is ${rectA(15,4)}.`)
const defsquare = sqrA(11.2124)
let usquare = sqrA(20)

console.log(`The difference between the uSquare and defSquare is of ${usquare-defsquare}cm²`)