import React, { useState } from 'react'
import LargeBoard from '../component/LargeBoard'
import {Modal} from 'react-bootstrap'
import {Button} from 'semantic-ui-react';

export default function GameBoard() {
  const [currentPlayer, setcurrentPlayer] = useState('X');
  const [hasWon, setHasWon] = useState('')
  const [showHTP, setShowHTP] = useState(false)

  function handleCP(player){
    player ? setcurrentPlayer("X") : setcurrentPlayer("O")
  }

  function handleHW(didSomoneWin){
    setHasWon(didSomoneWin)
  }

  function refreshPage(){
    window.location.reload();
  } 

  const handleClose = () => setShowHTP(false);
  const handleShow = () => setShowHTP(true);
  return (
    <div>
      <div className='complete-board'>
        <div className="game">
          <div className='game-text'>
            {
              hasWon === '' ? 
              <>
                Current Player: {currentPlayer}
              </> 
              : 
              <>
                {hasWon} <Button classname='refresh' icon='refresh' onClick={refreshPage}></Button>
              </>
            }
          </div>
          <div className="game-board">
            <LargeBoard currentPlayer={handleCP} hasWon={handleHW} />
          </div>
          <div className="game-info">
            <Button className='how-to-play' onClick={handleShow}>How To Play</Button>
          </div>
        </div>
      </div>

      <Modal show={showHTP} onHide={handleClose}>
        <Modal.Header className='htp-modal' closeButton>
          <Modal.Title>How To Play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="250"
            src="https://www.youtube.com/embed/_Na3a1ZrX7c"
            title="Ultimate Tic Tac Toe Instructions"
            allowFullScreen
          />
        </Modal.Body>
        <Modal.Footer>
          <Button positive onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}
