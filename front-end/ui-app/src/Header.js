import InterfaceQuestion from './InterfaceQuestion';

// Importazione degli hooks
import React, {useEffect, useState} from 'react'

// Libreria per la creazione di animazioni
import {motion} from 'framer-motion'

import Axios from 'axios'
import ErrorValidate from './ErrorValidate';

// Libreria non utilizzata
const Header = () => {
    return (
        <header id='header'>
            <div className='container-title-header'>

                {/* motion serve per indicare che subirà l'animazione, animate con chiave x e valore 100 mi permette di spostare l'elemento sull'asse delle x */}
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

    // Hook per tenere traccia dello stato dell'input
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const handleClick = () => {
        setReveal(true);
    };


    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        Axios
            .get('http://127.0.0.1:8000/user')
            .then((res) => {
                const data = res.data
                return setUsers(data)
            })
    }

    return (
        <div>
            <div className='form-input'>
                {/* Con onChange teniamo traccia delle modifiche fatto all'input, quali? quelle del suo valore, ovvero dove scrivo ( ringrazia target ) */}
                <motion.input id='email' value={username} type={'text'} onChange={(e) => setUsername(e.target.value)} animate={{x : 170}} placeholder='Inserisci la email' />
                <motion.input id='password' type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} animate={{x : 170}} placeholder='Inserisci la password' />
            </div>

            {/* onClick chiama la funzione handle che mi aggiornerà lo stato di reveal che ora e' true */}
            <motion.button className='button-reveal' onClick={handleClick} animate={{x : 86}}>START GAME</motion.button>
            {reveal && (
                <React.Fragment>
                    {
                        // Thernary operator per la visualizzazione dell'interfaccia delle domande, altrimenti spunterà un errore
                        users[0].username === username && users[0].password === password ? <InterfaceQuestion /> : <ErrorValidate />
                    }
                </React.Fragment>
            )}
        </div>
    )
}

export default Header