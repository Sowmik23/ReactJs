import React, { Component } from 'react'
import { UserConsumer } from './userContext';

//Context part -2

export class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello {username} </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
