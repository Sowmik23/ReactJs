import React from 'react'

//Props in React


// function Greet() {
//     return <h1> Hello Sowmik </h1>
// }

//destructuring props and state

const Greet = ({ name, heroName}) => {
//const Greet = ({name, heroName}) = props
//const Greet = (props) => {

    //console.log(props)
    //props.name = 'Sowmik'

    return (
        <div>
            <h1> Hello {name} a.k.a {heroName} </h1>
            {/* {children} */}
        </div>
    )
}



export default Greet