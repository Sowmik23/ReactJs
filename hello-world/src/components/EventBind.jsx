import React, { Component } from 'react'


//Binding Event Handlers


class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        //One way

        // this.clickHandler = this.clickHandler.bind(this)
    }

    //Another way

    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
    //     console.log(this)
    // }

    //another way

    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/* one way */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* another way */}
                {/* <button onClick={() => this.clickHandler()} >Click</button>  */}

                {/* another way */}
                <button onClick = {this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
