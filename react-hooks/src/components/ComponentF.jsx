import React, { Component } from 'react'

import {UserContext, ChannelContext} from '..App'

//useContext hook part -02

//  Context provides a way to
//  pass data through the component 
//  tree without having to pass props 
//  down manually at every level.


function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return ( 
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return ( 
                                        <div>User context value {user}, channel context value {channel}</div> )
                                    }
                                } 
                            </ChannelContext.Consumer>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
