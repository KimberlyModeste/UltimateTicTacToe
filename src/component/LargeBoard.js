import React, { useState } from 'react'
import SmallBoard from './SmallBoard'

export default function LargeBoard() {

  const [xIsNext, setXIsNext] = useState(true);
  const [largeSquares, setLargeSquares] = useState(Array(9).fill(true));

  function handleLSClick(i){

  }

  function getSection(i){
    console.log(i)
  }

  function handleXIsNext(){
    setXIsNext(!xIsNext)
  }
  
  return (
    <>
      <div className="large-board-row">
        <div className={`one ${largeSquares[0] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[0]} handleSmallBoardClick={handleXIsNext} />
        </div>
        <div className={`two ${largeSquares[1] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[1]} handleSmallBoardClick={handleXIsNext} />
        </div>
        <div className={`three ${largeSquares[2] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[2]} handleSmallBoardClick={handleXIsNext} />
        </div>
      </div>
      <div className="large-board-row">
        <div className={`four ${largeSquares[3] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[3]} handleSmallBoardClick={handleXIsNext} />
        </div>
        <div className={`five ${largeSquares[4] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[4]} handleSmallBoardClick={handleXIsNext} />
        </div>
        <div className={`six ${largeSquares[5] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[5]} handleSmallBoardClick={handleXIsNext} />
        </div>
      </div>
      <div className="large-board-row">
      <div className={`seven ${largeSquares[6] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[6]} handleSmallBoardClick={handleXIsNext} />
        </div>
        <div className={`eight ${largeSquares[7] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[7]} handleSmallBoardClick={handleXIsNext} />
        </div>
        <div className={`nine ${largeSquares[8] === true ? 'active' : ''}` } >
          <SmallBoard xIsNext={xIsNext} isActive={largeSquares[8]} handleSmallBoardClick={handleXIsNext} />
        </div>
      </div>
    </>
  )
}
