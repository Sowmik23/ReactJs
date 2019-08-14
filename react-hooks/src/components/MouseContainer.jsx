import React, {useState} from 'react'
import HookMouse from './HookMouse'

//useEffect with cleanup

function MouseContainer() {

    //const [state, setstate] = useState(initialState)
    //useS + down 1 + tab
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick = {() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>} 
        </div>
    )
}

export default MouseContainer
