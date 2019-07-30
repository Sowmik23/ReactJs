import React, { Component } from 'react'

//Component updating lifecycle methods

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Sowmik'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate () {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevstate){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB

