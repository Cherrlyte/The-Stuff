const sel = document.getElementById("numsel")
const table = document.getElementById("game")

function initialSetup(){
  for(let i=4; i <=20; i+=2){
    let op = document.createElement('option')
    op.value=i**2
    op.innerHTML=i**2
    console.log(op)
    sel.appendChild(op)
  }
}

function makeCard(){
  const temp = document.getElementById("cardTemplate")
  let clone = temp.content.cloneNode(true)
  clone.querySelector('#aeiou').innerHTML = "Carrd"
  table.appendChild(clone)
}
initialSetup()
for(let i=0; i < 20; i++){
  makeCard()
}