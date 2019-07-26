import React, { Component } from 'react'

//Conditional Rendering


class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        //one way
        
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Sowmik</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        //another way

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Sowmik</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        //another way

        return (
            this.state.isLoggedIn ?
                <div>Welcome Sowmik</div> : <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting
