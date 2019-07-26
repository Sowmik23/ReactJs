import React from 'react'
import Person from './Person';

//List Rendering

function NameList() {

    const names = ['Bruce', 'Clark' , 'Diana']
    //const nameList = names.map(name => <h2>{name}</h2>)

    return (
        <div>

            {/* one unefficient way
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* another way */}
            {names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)}


            {/* another way */}
            {/* {nameList} */}

        </div>
    )


    // ***********************
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30, 
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 25,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 28,
    //         skill: 'Vue'
    //     }
    // ]
    // const personList = persons.map(person => <Person key = {person.id} person = {person}/>)


    // return (

    //     <div>{personList}</div>
    // )
}

export default NameList
