import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext';

//Context part -2 & part-3

class ComponentE extends Component {

    static contextType = UserContext
    //or 

    render() {
        return (
            <div>
                Commponent E context {this.context}
                <ComponentF/>
            </div>
        )  
    }
}

// ComponentE.contextType = UserContext

export default ComponentE
