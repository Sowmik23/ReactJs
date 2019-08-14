import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        //we want to focus the input element
        inputRef.current.focus() //this is how you actually access input element

    }, []) 
    return (
        <div>
            <input ref = {inputRef} type ="text"/>
        </div>
    )
}

export default FocusInput
