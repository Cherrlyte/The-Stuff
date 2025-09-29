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
      t.setInput("-" + t.input)
    } else {
      const stripped = t.input.replace("-", "")
      t.setInput(stripped)
    }
  }

  for (let i = 1; i < 10; i++) {
    final.push(<button key={i} onClick={() => { handleClick(i) }}>{i}</button>)
  }
  final.push(<button key="negate" onClick={handleNegate}>+/-</button>)
  final.push(<button key={0} onClick={() => handleClick(0)}>0</button>)
  final.push(<button key='decimal' onClick={addDecimal}>.</button>)
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
    if (l.final[String(l.final).length - 1] != ")") {
      if (l.input == "" || isNaN(parseFloat(l.input))) return
    }
    if (parseFloat(l.input) < 0) {
      num = `(${l.input})`
    } else { num = l.input }

    l.setFin(l.final + num + op)
    l.sIn("")
  }

  function handleClear(all) {
    l.sIn('')
    if (all == true) {
      l.setFin('')
      l.setDisplay('')
    }
  }

  function handleSpecial(operand) {
    let num = ""
    if (l.input == "" || isNaN(parseFloat(l.input))) return
    if (parseFloat(l.input) < 0) {
      num = `(${l.input})`
    } else { num = l.input }

    l.setFin(l.final + `${operand}(${num})`)
    l.sIn("")
  }

  function handleInsert(operand) {
    if (l.input != "") {
      if (l.input == "" || isNaN(parseFloat(l.input))) return
      operand = l.input + operand
      l.sIn("")
    }
    l.setFin(l.final + `${operand}`)
  }

  function handleBack() {
    if (l.input == "" || isNaN(parseFloat(l.input))) return
    l.sIn(l.input.slice(0, -1))
  }

  butts.push(<button key="back" onClick={handleBack}>BCKSP</button>)
  butts.push(<button key="clear" onClick={handleClear}>C</button>)
  butts.push(<button key="clearall" onClick={() => { handleClear(true) }}>CA</button>)
  butts.push(<button key="plus" onClick={() => { handleOperand("+") }}>+</button>)
  butts.push(<button key="minus" onClick={() => { handleOperand("-") }}>-</button>)
  butts.push(<button key="multi" onClick={() => { handleOperand("*") }}>x</button>)
  butts.push(<button key="divide" onClick={() => { handleOperand("/") }}>/</button>)
  butts.push(<button key="pow" onClick={() => { handleOperand("^") }}>^</button>)
  butts.push(<button key="square" onClick={() => { handleSpecial("sqrt") }}>²√</button>)
  butts.push(<button key="log" onClick={() => { handleSpecial("log") }}>log(x)</button>)
  butts.push(<button key="ln" onClick={() => { handleSpecial("ln") }}>ln(x)</button>)
  butts.push(<button key="dunno" onClick={() => { handleSpecial("abs") }}>abs(x)</button>)
  butts.push(<button key="po" onClick={() => { handleInsert("(") }}>(</button>)
  butts.push(<button key="pc" onClick={() => { handleInsert(")") }}>)</button>)
  butts.push(<button key="equal" onClick={handleCalc}>=</button>)

  return butts
}


export function Calculator() {
  const [input, setInput] = useState('')
  const [display, setDisplay] = useState('')
  const [fin, setFin] = useState('')

  return (
    <div className="calc">
      <div className='screen'>
        <p>{display == "" ? "N/A" : display}</p>
        <p className="smallText">{`${input} [ ${fin} ]`}</p>
      </div>
      <div className="allBox">
        <div className="buttbox">
          <Buttons setInput={setInput} input={input} dis={display} callTheFeds={setDisplay} />
        </div>
        <div className="actBox">
          <ActBox final={fin} setDisplay={setDisplay} setFin={setFin} input={input} sIn={setInput} />
        </div>
      </div>
    </div>
  )
}