const sel = document.getElementById("numsel")
const table = document.getElementById("game")
let availableTypes = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
let cardList = []
let guesses = 0
let tries = 0

let doppel

class cMan {
  checkIDs = []
  fact
  name

  constructor(name) {
    this.name = name
  }

  makeCard(id, type) {
    const temp = document.getElementById("cardTemplate")
    let clone = temp.content.cloneNode(true)
    clone.querySelector('#aeiou').innerHTML = this.name
    clone.children[0].setAttribute("CardID", id)
    clone.children[0].setAttribute("CardType", type)

    clone.children[0].addEventListener('click', (ev) => {
      console.log(ev.currentTarget.className)
      this.onClick(ev.currentTarget)
    })

    table.appendChild(clone)
  }

  onClick(c) {
    const cID = c.getAttribute('CardID')
    if (c.getAttribute("gone" || this.checkIDs[0] == cID) != undefined) { return }
    this.woosh(c)
    this.checkIDs.push(cID)
    if (this.checkIDs[1] != undefined && this.checkIDs[0] != cID) {
      let c1 = table.querySelector(`[CardID="${this.checkIDs[0]}"]`)
      let c2 = table.querySelector(`[CardID="${this.checkIDs[1]}"]`)
      if (c1.getAttribute("CardType") == c2.getAttribute("CardType")) {
        c1.setAttribute("gone", "")
        c2.setAttribute("gone", "")
        this.checkIDs = []
        guesses += 2
      } else {
        this.checkIDs = []
        setTimeout(() => { this.unwoosh(c1); this.unwoosh(c2) }, 500)
      }
      tries++
      document.getElementById('ftext').innerHTML = `${guesses}/${cardList.length} Cards Guessed in ${tries} tries.`
    }
  }

  woosh(card) {
    card.querySelector("#aeiou").innerHTML = card.getAttribute("CardType")
  }
  unwoosh(card) {
    card.querySelector("#aeiou").innerHTML = this.name
  }

}

function initialSetup() {
  for (let i = 4; i <= 12; i++) {
    let op = document.createElement('option')
    op.value = i ** 2
    op.innerHTML = i ** 2
    sel.appendChild(op)
  }
  let op = document.createElement('option')
  op.value = 188
  op.innerHTML = "Max (188)"
  sel.appendChild(op)
}

function startGame(numcards) {
  doppel = new cMan("Card")
  document.getElementById('startbutton').setAttribute('disabled', 1)
  if (numcards > availableTypes.length * 2) {
    console.log("Resetting to highest possible card number.")
    console.log(availableTypes.length * 2)
    numcards = availableTypes.length * 2
  }
  let l1 = Array(numcards / 2).fill().map((_, i) => availableTypes[i])
  const newL = [...l1, ...l1].sort(() => (Math.random() - 0.5))
  for (let i = 0; i < numcards; i++) {
    doppel.makeCard(i, newL[i])
    cardList.push(i)
    console.log(`Published ${newL[i]} card with ID ${i}`)
  }
  console.log("Hiphip! All done! I think...")
  document.querySelector("#ftext").innerHTML = "Game in progress! No cards matched."
}

function oldBuggyPieceOfShitCardMaker(num) {
  doppel = new cMan("AHHrd")
  for (let i = 0; i < num; i++) {
    doppel.makeCard(i, "a")
    cardList.push(i)
  }
  for (let i = 0; i < num / 2; i++) {
    const rng1 = Math.floor(Math.random() * cardList.length)
    let rng2 = Math.floor(Math.random() * cardList.length)
    const rngl = Math.floor(Math.random() * availableTypes.length)

    if (cardList[rng1] == cardList[rng2]) {
      rng2 = Math.floor(Math.random() * cardList.length)
    }
    table.querySelector(`[CardID="${cardList[rng1]}"]`).setAttribute("CardType", availableTypes[rngl])
    table.querySelector(`[CardID="${cardList[rng2]}"]`).setAttribute("CardType", availableTypes[rngl])
    console.log(`Published two ${availableTypes[rngl]} cards. ${cardList[rng1]} and ${cardList[rng2]}`)
    availableTypes.replace(availableTypes[rngl], "")
    cardList.splice(cardList.indexOf(cardList[rng1]), 1)
    cardList.splice(cardList.indexOf(cardList[rng2]), 1)
  }
  for (let i = 0; i < num; i++) {
    cardList.push(i)
  }
}

function secretGameStart() {
  document.getElementById('startbutton').setAttribute('disabled', 1)
  document.getElementById('startbutton').innerHTML = "I'm not helping you."
  oldBuggyPieceOfShitCardMaker(12480)
  console.log("We got a special deal just for you...")
  document.querySelector("#ftext").innerHTML = "DEAR FUCKING GOD"
}

initialSetup()