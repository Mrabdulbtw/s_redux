import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const user = useSelector((state) => state.user.value)
    const theme = useSelector((state) => state.theme.value)
    console.log(theme.color);

    
    return (
        <div style={{ color: theme.color }}>
            {
                user.name && <div style={{color:theme.color}}>
                    <div className='Profile'>
                        <div className="name">Name:{user.name}</div>
                        <div className="age">Age:{user.age}</div>
                        <div className="gmail">Email:{user.Email}</div>
                    </div></div>
            }
        </div>
    )
}
