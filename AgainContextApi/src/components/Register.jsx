import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Register = () => {
    handleChange() = {

    }
    const { setuser } = useContext.UserContext()
    return (
        <>
            <input
                onChange={handleChange}
                value={(e) => setuser(e.)}
            />
        </>
    )
}

export default Register