/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  function TheCube({ cubename, board }) {
    cubename = cubename===undefined ? 'nullcube' : cubename
    let final = []
    for (let x = 0; x < 3; x++) {
      let f = []
      for (let i = 0; i < 3; i++) {
        f.push(<td key={`${cubename}${x}${i}`}>{board[cubename][x][i]}</td>)
      }
      final.push(<tr key={`${cubename}${x}`}>{f}</tr>)
    }
    return final
  }

  function randomNumberGenerator(max, min) {
    min = min != null ? min : 1
    max = max != null ? max : 100
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function makeBoard(){
    let board = {}
    for (let i = 0; i < 9; i++) {
      board[i] = []
      for(let y = 0; y < 3; y++){
        board[i][y] = []
        for(let x = 0; x < 3; x++){
        board[i][y].push(randomNumberGenerator(9, 0))
        }
      }
      
    }
    return board
  }

  function TheWholeGrid() {
    let eeee = []
    let board = makeBoard()
    console.log(board)
    for (let i = 0; i < 9; i++) {
      eeee.push(<table key={i}><TheCube cubename={i} board={board}/></table>)
    }
    
    return eeee
  }

  return (
    <>
      <div id='board'>
        <TheWholeGrid />
      </div>
    </>
  )
}


export default App
