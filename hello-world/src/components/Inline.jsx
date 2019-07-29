import React from 'react'

//Another way to declare css style Stylsheet.jsx


const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 style = {heading}>Inline</h1>
        </div>
    )
}

export default Inline
