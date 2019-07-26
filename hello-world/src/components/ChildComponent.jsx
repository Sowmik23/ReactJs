import React from 'react'

//Methods as props

function ChildComponent(props) {
    return (
        <div>
            {/* one way */}
            {/* <button onClick = {props.greetHandler}>Greet Parent</button> */}

            {/* another way  */}
            <button onClick = { () => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
