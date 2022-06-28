import React from 'react'
import data from './data.json'

const Login = () => {
    return (
        <div className='form-input'>
            <input id='email' placeholder='Inserisci la email' />
            <input id='password' placeholder='Inserisci la password' />
        </div>
    );
}
    
export default Login