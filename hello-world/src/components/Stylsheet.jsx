import React from 'react'
import './myStyle.css'

//Styling and CSS basics

function Stylsheet(props) {
    let className = props.primary ? 'primary' : ''

    return (
        <div>
            <h2 className={'${primary}font-xl'}>Stylsheets</h2>
        </div>
    )
}

export default Stylsheet

