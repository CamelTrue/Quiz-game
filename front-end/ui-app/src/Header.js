import InterfaceQuestion from './InterfaceQuestion';

// Importazione degli hooks
import React, {useEffect, useState} from 'react'

// Libreria per la creazione di animazioni
import {motion} from 'framer-motion'

import "aos/dist/aos.css";
import AOS from "aos";
import ErrorValidate from './ErrorValidate';
import user_data from './user_data.json'

// Libreria non utilizzata
const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Riferimento all'oggetto json user_data
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
                {/* Con onChange teniamo traccia delle modifiche fatto all'input, quali? quelle del suo valore, ovvero dove scrivo ( ringrazia target ) */}
                <motion.input id='email' value={email} onChange={(e) => setEmail(e.target.value)} animate={{x : 170}} placeholder='Inserisci la email' />
                <motion.input id='password' value={password} onChange={(e) => setPassword(e.target.value)} animate={{x : 170}} placeholder='Inserisci la password' />
            </div>

            {/* onClick chiama la funzione handle che mi aggiornerà lo stato di reveal che ora e' true */}
            <motion.button className='button-reveal' onClick={handleClick} animate={{x : 86}}>START GAME</motion.button>
            {reveal && (
                <React.Fragment>
                    {
                        // Thernary operator per la visualizzazione dell'interfaccia delle domande, altrimenti spunterà un errore
                        user[1] === email && user[2] === password ? <InterfaceQuestion /> : <ErrorValidate />
                    }
                </React.Fragment>
            )}
        </div>
    )
}
    
export default Header