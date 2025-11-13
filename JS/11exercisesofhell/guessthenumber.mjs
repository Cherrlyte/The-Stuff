import input from 'input'
console.log("GAMBLE TIME!")
console.log("Guess a number from 0-100 and double your money! Each guess costs 15 dollars.")
let guess = 0
let money = 1515
function randomNumberGenerator(max, min, quant) {
    quant = quant != null ? quant :
        min = min != null ? min : 1
    max = max != null ? max : 100

    if (quant > 1) {
        let arr = []
        for (let i = 0; i < quant; i++) {
            arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
        }
        return arr
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}
let select = randomNumberGenerator(100, 0)

while (guess != select) {
    money -= 15
    console.log(`You have: $${money}`)
    const guess = await input.text("Select a number from 0-100 (or type exit)")
    if (guess == select) {
        money += 25
        console.log("Correct!");
        console.log(`You win with $${money}`)
        break
    } else if (guess > select) {
        console.log("Too high!");
    } else if (guess < select) {
        console.log("Too low!");
    } else if (guess === 'exit') {
        console.log("kk");
        break
    }
}