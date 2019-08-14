import React from 'react'

function Count({ text, count}) {
    console.log(`Rendering ${text}`)
    return <div>{text} - {count}</div>
}

export default React.memo(Count)
//React.memo is used to prevent unnecessary re-renders