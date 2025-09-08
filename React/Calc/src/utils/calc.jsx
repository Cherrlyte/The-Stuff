import "./comp.css"
import { useState } from "react"
import { Parser } from "expr-eval"

function Buttons(t) {
  let final = []

  function handleClick(hh) {
    t.setInput(t.input + `${hh}`)
  }

  function addDecimal() {
    if (!t.input.includes(".")) {
      t.setInput(t.input + `.`)
    }
  }

  function handleNegate() {
    if (!t.input.includes("-", 0)) {
      console.log("no minus")
      t.setInput("-" + t.input)
    } else {
      const stripped = t.input.replace("-", "")
      t.setInput(stripped)
    }
  }

  for (let i = 1; i < 10; i++) {
    final.push(<button className="butt" key={i} onClick={() => { handleClick(i) }}>{i}</button>)
  }
  final.push(<button className="butt" key="negate" onClick={handleNegate}>+/-</button>)
  final.push(<button className="butt" key={0} onClick={() => handleClick(0)}>0</button>)
  final.push(<button className="butt" key='decimal' onClick={addDecimal}>.</button>)
  return final
}

function ActBox(l) {
  const butts = []
  function handleCalc() {
    const inp = l.input
    let tocalc
    if (l.input != "") {
      l.setFin(l.final + inp)
      tocalc = (l.final + inp)
      l.sIn("")
    } else {
      tocalc = l.final
    }
    const lol = Parser.evaluate(tocalc)
    l.setDisplay(lol)
  }
  function handleOperand(op) {
    let num = ""
    let finalexpr = ""
    if (l.input == "" || isNaN(parseFloat(l.input))) return
    if (parseFloat(l.input) < 0) {
      num = `(${l.input})`
    } else { num = l.input }

    l.setFin(l.final + num + op)
    l.sIn("")
  }

  function handleClear() {
    l.sIn('')
    l.setFin('')
    l.setDisplay('')
  }

  butts.push(<button className="butt" key="plus" onClick={() => { handleOperand("+") }}>+</button>)
  butts.push(<button className="butt" key="minus" onClick={() => { handleOperand("-") }}>-</button>)
  butts.push(<button className="butt" key="multi" onClick={() => { handleOperand("*") }}>x</button>)
  butts.push(<button className="butt" key="divide" onClick={() => { handleOperand("/") }}>/</button>)
  butts.push(<button className="butt" key="inschar" onClick={() => { handleOperand("") }}>iNS</button>)
  butts.push(<button className="butt" key="clear" onClick={handleClear}>C</button>)
  butts.push(<button className="butt" key="equal" onClick={handleCalc}>=</button>)

  return butts
}


export function Calculator() {
  const [input, setInput] = useState('')
  const [display, setDisplay] = useState('')
  const [fin, setFin] = useState('')

  return (
    <div className="calc">
      <div className='screen'>
        <p className="final">{display == "" ? "N/A" : display}</p>
        <p className="inputonly">{`${input} (${fin})`}</p>
      </div>
      <div className="buttbox">
        <Buttons setInput={setInput} input={input} dis={display} callTheFeds={setDisplay} />
      </div>
      <div className="actBox">
        <ActBox final={fin} setDisplay={setDisplay} setFin={setFin} input={input} sIn={setInput} />
      </div>
    </div>
  )
}