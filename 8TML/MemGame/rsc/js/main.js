const sel = document.getElementById("numsel")

class Carrd extends HTMLElement{
    constructor(){
      super()
      let cTemp = document.getElementById("cardTemplate")
      let tCon = cTemp.content
      const sRoot = this.attachShadow({mode: 'open'})
      sRoot.appendChild(tCon.cloneNode(true))
    }
  }

function initialSetup(){
  for(let i=4; i <=20; i+=2){
    let op = document.createElement('option')
    op.value=i**2
    op.innerHTML=i**2
    console.log(op)
    sel.appendChild(op)
  }
}


customElements.define("actual-card", Carrd)
initialSetup()