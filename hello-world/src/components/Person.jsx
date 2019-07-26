import React from 'react'

//List Rendering

function Person(props) {
    return (
        <div>
            <h2>
                I am {props.person.name}. I am {props.person.age} years old. I know {props.person.skill} in details.
            </h2>
        </div>
    )
}

export default Person
