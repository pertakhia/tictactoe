import React, { useState } from 'react'
import Board from './Board'



const Game = () => {

    const [height, setHeight] = useState(3)
    const [width, setWidth] = useState(3)
    const [combination, setCombination] = useState(3)
    const [board, setBoard] = useState(()=> new Array(height * width).fill(null));
    const [xIsNext, setXisNext] = useState(false);
    const [play, setPlay] = useState(false)
   

    
    const handleCellClick = i => {
        const boardCopy = [...board];
        if(boardCopy[i] ===  'X' || boardCopy[i] ===  'O') return;
        boardCopy[i] = xIsNext ? 'O' : 'X';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        console.log("change", boardCopy[i])
    }

    
    const startPlay =(e) => {
        e.preventDefault()
        setPlay(true)
        setBoard(() => new Array(height * width).fill(null))
        
    }

    const getTitle = () => {
        return 'Next Player  ' + (xIsNext ? 'O' : 'X');
    }

    
        
    

    return (
        <>
         <div className='home-box'>
            <h1 className='hom-box-h1'>Tic Tac Toe</h1>
            <h2 className='home-box-h1'>Choose the type of game</h2>

            <section className='home-section'>
                 <form onSubmit={startPlay}>
                    <label>height
                      <input 
                         type='number'
                         value={height} 
                         max={10}
                         min={2}
                         onChange={(e) => setHeight(e.target.value)}
                       />
                   </label>

                   <label>width
                      <input 
                         type='number'
                         max={10}
                         min={2}
                         value={width}
                         onChange={(e) => setWidth(e.target.value)}
                      />
                   </label>

                   <label>Winning combination
                         <input 
                             type='number'
                             max={10}
                             min={2}
                             value={combination}
                             onChange={(e) => setCombination(e.target.value)}
                         />
                    </label>
                    <button type='submit'> Start Play </button>
                </form> 
            </section>
        </div>
         { play && ( 
            <>
              <div className='center' >
                  <p >{getTitle() }</p>
               </div>
              <Board 
                 squares={board} 
                 onClick={handleCellClick}    
                 col={height } 
                 row={width} 
                 play={play}
               />
           </>
           )
         }
         </>
    )
}

export default Game
