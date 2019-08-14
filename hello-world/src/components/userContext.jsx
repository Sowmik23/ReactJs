import React from 'react'

// Context part - 2

// const UserContext = React.createContext()
// or
const UserContext = React.createContext('Sowmik Sarker')


const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext