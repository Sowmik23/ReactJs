import React, { Component } from 'react'
import ChildComponent from './ChildComponent';


//Methods as props

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }


    greetParent(childName){
        //one way 
        // alert('Hello' + this.state.parentName)
        
        //another way
        alert(`Hello ${this.state.parentName} from ${childName}`)  //see it is not quotation
    } 
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
