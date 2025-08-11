const sel = document.getElementById("numsel")
const table = document.getElementById("game")
let availableTypes = "abcdefghijklmnopqrstuvwxyz-+=@"
let cardList = []

let doppel

class cMan {
  checkIDs = []
  fact

  constructor(factory){
    this.fact = factory
  }

  makeCard(name, id, type) {
    const temp = document.getElementById("cardTemplate")
    let clone = temp.content.cloneNode(true)
    clone.querySelector('#aeiou').innerHTML = name
    clone.children[0].setAttribute("CardID", id)
    clone.children[0].setAttribute("CardType", type)

    clone.children[0].addEventListener('click', (ev)=>{
      console.log(ev.currentTarget.className)
      this.onClick(ev.currentTarget)
    })

    table.appendChild(clone)
    //return clone
  }

  onClick(c){
    if(c.getAttribute("gone") != undefined){return}
    const cID = c.getAttribute('CardID')
    if(this.checkIDs[0] == cID){return}
    console.log(cID)
    this.woosh(c)
    this.checkIDs.push(cID) 
    if(this.checkIDs[1] != undefined && this.checkIDs[0] != cID){
      let c1 = table.querySelector(`[CardID="${this.checkIDs[0]}"]`)
      let c2 = table.querySelector(`[CardID="${this.checkIDs[1]}"]`)
      if(c1.getAttribute("CardType") == c2.getAttribute("CardType")){
        console.log("Hey!")
        c1.setAttribute("gone", "")
        c2.setAttribute("gone", "")
        this.checkIDs = []
      }else{
        this.checkIDs = []
        setTimeout(()=>{this.unwoosh(c1); this.unwoosh(c2)}, 500)
      }
    }
  }

  woosh(card){
    card.querySelector("#aeiou").innerHTML = card.getAttribute("CardType")
  }
  unwoosh(card){
    card.querySelector("#aeiou").innerHTML = "Card"
  }

}

function initialSetup() {
  doppel = new cMan()
  for (let i = 4; i <= 21; i += 2) {
    let op = document.createElement('option')
    op.value = i ** 2
    op.innerHTML = i ** 2
    console.log(op)
    sel.appendChild(op)
  }
}

initialSetup()
for (let i = 0; i < 2048; i++) {
  doppel.makeCard("caaard", i, "a")
  cardList.push(i)
}
const x = cardList.length
for(let i=0; i < x/2; i++){
  console.log(i)
  const rng1 = Math.floor(Math.random() * cardList.length)
  let rng2 = Math.floor(Math.random() * cardList.length)
  const rngl = Math.floor(Math.random() * availableTypes.length)

  if(cardList[rng1] == cardList[rng2]){
    rng2 = Math.floor(Math.random() * cardList.length)
  }

  table.querySelector(`[CardID="${cardList[rng1]}"]`).setAttribute("CardType", availableTypes[rngl])
  table.querySelector(`[CardID="${cardList[rng2]}"]`).setAttribute("CardType", availableTypes[rngl])
  console.log(`Published two ${availableTypes[rngl]} cards. ${cardList[rng1]} and ${cardList[rng2]}`)
  console.log(cardList)
  console.log(availableTypes)
  availableTypes.replace(availableTypes[rngl], "")
  cardList.splice(cardList.indexOf(cardList[rng1]), 1)
  cardList.splice(cardList.indexOf(cardList[rng2]), 1)
}