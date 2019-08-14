import React, { Component } from 'react'
import ComponentE from './ComponentE';

//Context part -2

class ComponentC extends Component {
    render() {
        return (
            <div>
                <ComponentE/>
            </div>
        )
    }
}

export default ComponentC
