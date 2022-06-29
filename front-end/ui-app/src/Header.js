import InterfaceQuestion from './InterfaceQuestion';
import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import "aos/dist/aos.css";
import AOS from "aos";
import ErrorValidate from './ErrorValidate';
import user_data from './user_data.json'

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <header id='header'>
            <div className='container-title-header'>
                <motion.h1 className='title-header' animate={{x : 100}}>Benvenuto dentro quiz game</motion.h1>
                <div className='container'>
                    <div className='row flex-row align-items-center'>
                        <div className='col-12 col-md-8 col-lg-4'>
                            <ButtonStart />
                            <ErrorValidate />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const ButtonStart = () => {
    const [reveal, setReveal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = [
        user_data[0].username,
        user_data[0].email,
        user_data[0].password
    ]

    const handleClick = () => {
        setReveal(true);
    };

    return (
        <div>
            <div className='form-input'>
                <motion.input id='email' value={email} onChange={(e) => setEmail(e.target.value)} animate={{x : 170}} placeholder='Inserisci la email' />
                <motion.input id='password' value={password} onChange={(e) => setPassword(e.target.value)} animate={{x : 170}} placeholder='Inserisci la password' />
            </div>
            <motion.button className='button-reveal' onClick={handleClick} animate={{x : 86}}>START GAME</motion.button>
            {reveal && (
                <React.Fragment>
                    {
                        user[1] === email && user[2] === password ? <InterfaceQuestion /> : <ErrorValidate />
                    }
                </React.Fragment>
            )}
        </div>
    )
}
    
export default Header