import React from 'react'

const Square = ({  value, onClick}) => (
    <button  className=' btnsquare' onClick={onClick}>
        {value}
    </button>
)

export default Square
