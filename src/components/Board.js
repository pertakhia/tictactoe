import React from 'react'
import Square from './Square'


const Board = ({  row, col, squares, onClick}) => (
    <div  style = {{
        borderRadius: '10px',
        margin: '0 auto',
        height: '400px',
        width: '400px',
        display: 'grid',
        gridTemplate: `repeat(${col}, 1fr) / repeat(${row}, 1fr)`
    }} >
        {squares.map((square, i) => (
            <Square  
                key={i} 
                value={square} 
                onClick={() => onClick(i)}
           />
        ))}
    </div>
)

export default Board
