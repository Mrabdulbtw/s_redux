import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from './feature/userSlice'
import { Logout } from './feature/userSlice'
import './login.css'


export default function login() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.value)
    const [userData, setuserdata] = useState({
        name: '',
        age: "",
        Email: ''
    })
    console.log(userData);

    return (

        <>
            {
                !user.name && <div className="input-boxs">
                    <input type="text" name="name" id="name" placeholder='Enter your name' onChange={(e) =>
                        setuserdata((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={userData.name} />
                    <input type="number" name="age" id="age" placeholder='Enter your age'
                        onChange={(e) =>
                            setuserdata((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={userData.age} />
                    <input type="text" name='Email' placeholder='Enter your Email'
                        onChange={(e) =>
                            setuserdata((pre) => ({ ...pre, [e.target.name]: e.target.value }))} value={userData.Email} />
                </div>
            }
            
            <div className='Buttons'>
                {
                    !user.name ? <button className='Login' onClick={() => {
                        dispatch(Login({ name: userData.name, age: userData.age, Email: userData.Email }))


                    }} >Login</button> :
                        <button className='Logout' onClick={() => {
                            dispatch(Logout())
                        }}>Logout</button>
                }
            </div>


        </>
    )
}
