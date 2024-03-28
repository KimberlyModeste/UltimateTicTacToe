import React, { useState } from 'react'
import SmallBoard from './SmallBoard'

export default function LargeBoard({currentPlayer})  {

  const [xIsNext, setXIsNext] = useState(true);
  const [largeSquares, setLargeSquares] = useState(Array(9).fill(true));
  
  function calculateBiggerWinner(largeSquares){
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

      if(!(largeSquares[a] === false || largeSquares[a] === true)&&(largeSquares[a] && largeSquares[a] === largeSquares[b] && largeSquares[a] === largeSquares[c]))
        return largeSquares[a]
    }
    return null;
  }


  function handleLSClick(data){
    if(calculateBiggerWinner(largeSquares))
    return

    const tempLS = largeSquares.slice()

    if(data.winner)
    {
      tempLS[data.value] = data.winner
    }
    
    let trigger = false
    if(tempLS[data.sec] === 'O' || tempLS[data.sec] === 'X')
    {
      trigger = true
    }

    for(let i = 0; i < 9; i++)
    {
      if(tempLS[i] === true || tempLS[i] === false)
        {
          tempLS[i] = trigger
        }
    }


    tempLS[data.sec] = tempLS[data.sec] === true || tempLS[data.sec] === false ? true : tempLS[data.sec]
    const theBiggestWinner = calculateBiggerWinner(tempLS)
    if(theBiggestWinner){
      
      for(let i = 0; i < 9; i++)
      {
        if(tempLS[i] === true)
          {
            tempLS[i] = false
          }
      }
      console.log('The Biggest Winner is: ', theBiggestWinner)
    }

    setLargeSquares(tempLS)
  }

  function handleXIsNext(){
    currentPlayer(!xIsNext)
    setXIsNext(!xIsNext)
  }
  
  return (
    <>
      <div className="large-board-row">
        <div className={`one ${largeSquares[0] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[0] !== 'X' && largeSquares[0] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[0]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={0} />
            :
            <div className='finished-game'>
              {largeSquares[0]}
            </div>
          }
        </div>
        <div className={`two ${largeSquares[1] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[1] !== 'X' && largeSquares[1] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[1]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={1} />
            :
            <div className='finished-game'>
              {largeSquares[1]}
            </div>
          }
        </div>
        <div className={`three ${largeSquares[2] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[2] !== 'X' && largeSquares[2] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[2]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={2} />
            :
            <div className='finished-game'>
              {largeSquares[2]}
            </div>
          }
        </div>
      </div>
      <div className="large-board-row">
        <div className={`four ${largeSquares[3] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[3] !== 'X' && largeSquares[3] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[3]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={3} />
            :
            <div className='finished-game'>
              {largeSquares[3]}
            </div>
          }
            </div>
        <div className={`five ${largeSquares[4] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[4] !== 'X' && largeSquares[4] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[4]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={4} />
            :
            <div className='finished-game'>
              {largeSquares[4]}
            </div>
          }
            </div>
        <div className={`six ${largeSquares[5] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[5] !== 'X' && largeSquares[5] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[5]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={5} />
            :
            <div className='finished-game'>
              {largeSquares[5]}
            </div>
          }
        </div>
      </div>
      <div className="large-board-row">
      <div className={`seven ${largeSquares[6] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[6] !== 'X' && largeSquares[6] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[6]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={6} />
            :
            <div className='finished-game'>
              {largeSquares[6]}
            </div>
          }
        </div>
        <div className={`eight ${largeSquares[7] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[7] !== 'X' && largeSquares[7] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[7]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={7} />
            :
            <div className='finished-game'>
              {largeSquares[7]}
            </div>
          }
        </div>
        <div className={`nine ${largeSquares[8] === true ? 'active' : 'disabled'}` } >
          {
            largeSquares[8] !== 'X' && largeSquares[8] !== 'O' ?
            <SmallBoard xIsNext={xIsNext} isActive={largeSquares[8]} handleSmallBoardClick={handleXIsNext} currentSec={handleLSClick} value={8} />
            :
            <div className='finished-game'>
              {largeSquares[8]}
            </div>
          }
          </div>
      </div>
    </>
  )
}
