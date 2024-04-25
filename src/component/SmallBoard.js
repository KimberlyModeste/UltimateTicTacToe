import React, { useState } from 'react'
import Square from './Square.js'

export default function SmallBoard({xIsNext, handleSmallBoardClick, currentSec, value}) {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]
    }
    return null;
  }

  function calculateTie(squares){
    let temp = true;
    for(let i = 0; i < squares.length; i++)
    {
      if(squares[i] === null)
      { 
        temp = false
        break;
      }
    }
    return temp
  }


  function handleClick(i){
    if(squares[i] || calculateWinner(squares))
    return

    
    let data = {'sec' : i}
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i]="X" : nextSquares[i]="O"
    let won = calculateWinner(nextSquares)
    let tie = calculateTie(nextSquares)
    if(won)
    {
      data.winner = won
      data.value = value
    }
    else if(tie)
    {
      data.winner= '?'
      data.value = value
    }

    setSquares(nextSquares)
    currentSec(data)

  }

  return (
	<div className='small-board' onClick={handleSmallBoardClick}>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]}  onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]}  onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]}  onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]}  onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]}  onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]}  onSquareClick={() => handleClick(8)} />
    </div>
	</div>
  )
}
