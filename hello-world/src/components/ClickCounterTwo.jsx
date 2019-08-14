import React, { Component } from 'react'

//Render props part -2

class ClickCounterTwo extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     } 
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
    
    render() {
        const {count, incrementCount} = this.props 
        return (
            <div>
                <button onClick= {incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
