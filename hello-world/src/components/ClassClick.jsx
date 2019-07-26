import React, { Component } from 'react'

//Evnet Handling

export class ClassClick extends Component {

    clickHandler(){
        console.log('Clicked the button')
    }

    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
