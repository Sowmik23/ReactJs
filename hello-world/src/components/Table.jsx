import React from 'react'
import Columns from './Columns';

//Fragment

function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns/>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
