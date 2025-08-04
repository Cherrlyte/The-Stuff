let hStr = 8
const hLck = 10
const hMod = 2
let hHP = 100

const eStr = 12
const eLck = 4
const eMod = 1.8
let eHP = 215

let dDealt = 0

function calcAttack(str, lck, mod){
    const fStr = str*2
    const modDmg = fStr + (mod-(Math.sqrt(mod)))
    const lckDmg = (Math.random() * lck)
    return Math.floor(fStr + modDmg + lckDmg)
  }
  
do{

  for(let i = 0; i < 4; i++){
    const rng = Math.random() * 100
    if(rng > 80){
      console.log(`Hero healed 20HP!`)
      console.log(`Hero STRENGHT went up by 2!`)
      hHP += hHP <= 95 ? 20 : 0
      hStr += 2
    }
    else if(rng > 40){
      console.log(`Hero healed 15HP!`)
      hHP += hHP <= 95 ? 10 : 0
    }else{
      console.log("Nothing...")
    }
  }

  dDealt = calcAttack(hStr, hLck, hMod)
  console.log(`Hero dealt ${dDealt}DMG.`)
  eHP -= dDealt
  dDealt = calcAttack(eStr, eLck, eMod)
  console.log(`Enemy dealt ${dDealt}DMG.`)
  hHP -= dDealt
  console.log(`Enemy HP: ${eHP} | Hero HP: ${hHP}`)

} while(hHP > 0 || eHP > 0)

if(hHP < 0){
  console.log("You lose!")
}else if(eHP < 0){
  console.log("You win!")
}
