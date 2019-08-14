import React, {useContext} from 'react'
import ComponentF from './ComponentF';
import {UserContext, ChannelContext} from '..App'


//useContext hook part -02

//  Context provides a way to
//  pass data through the component 
//  tree without having to pass props 
//  down manually at every level.


//this is simplest way to use hooks context than
// componentF or class context

// here descibes context in another way called hooks 
// and in componentF describes classcontext

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
            {/* <ComponentF/> */}
        </div>
    )
}

export default ComponentE
