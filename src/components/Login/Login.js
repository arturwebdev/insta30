import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectUsers } from '../../store/slices/users/usersSlice'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { useNavigate } from 'react-router-dom'

function Login() {
    const {usersData, currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()

        const [{value: login}, {value: password}] = formRef.current

        dispatch(logIn({login, password}))

        formRef.current.reset()
    }

    useEffect(() => {
        console.log(currentUser);
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])

    useEffect(() => {
        if (!usersData.length) {
            dispatch(fetchUsers())
        }
    }, [])

    return (
        <div style={{padding: '250px', textAlign: 'center'}}>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" defaultValue={'bret'} placeholder='login' /><br/><br/>    
                <input type="text" defaultValue={'gwenborough'} placeholder='password' /><br/><br/>
                <button>Log in</button>    
            </form>        
        </div>
    )
}

export default Login