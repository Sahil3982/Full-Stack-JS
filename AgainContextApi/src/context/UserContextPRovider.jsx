import React, { useState } from 'react'
import UserContext from './UserContext'

const [user, setuser] = useState(null)
const UserContextPRovider = ({children}) => {
  return (
    <UserContext.Provider value={{user , setuser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextPRovider