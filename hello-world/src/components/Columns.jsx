import React from 'react'

//Fragment

function Columns() {

    const items = [] 

    return (
        // <React.Fragment>
        //     {
        //         items.map( item => (
        //             <React.Fragment key = {item.id }>
        //                 <h1>Title</h1>
        //                 <p>{item.title}</p>
        //             </React.Fragment>
        //         ))
        //     }
        //     <td>Name</td>
        //     <td>Sowmik</td>

        // </React.Fragment>

        <>
            <td>Name</td>
            <td>Sowmik</td>
        </>
    )
}

export default Columns
