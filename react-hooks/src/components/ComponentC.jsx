import React from 'react'
import ComponentE from './ComponentE';

//useContext hook part -02

//  Context provides a way to
//  pass data through the component 
//  tree without having to pass props 
//  down manually at every level.

function ComponentC() {
    return (
        <div>
            <ComponentE/>
        </div>
    )
}

export default ComponentC
