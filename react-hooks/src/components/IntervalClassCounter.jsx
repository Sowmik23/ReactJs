import React, { Component } from 'react'

//useEffect with incorrect incorrect dependency

class IntervalClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }


    //count increment in every 1 second's
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    // Clear's memory
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <h1>{this.state.count}</h1>
        )
    }
}

export default IntervalClassCounter
