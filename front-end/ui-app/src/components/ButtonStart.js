import InterfaceQuestion from './InterfaceQuestion'
import React, {useState, useEffect} from "react"
import ErrorValidate from './ErrorValidate'
import { motion } from "framer-motion"
import Axios from "axios"

const ButtonStart = () => {
    
    const [reveal, setReveal] = useState(false)
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

    let fn = []
    let ln = []
    let user = []
    let pass = []
    users.map(el => {
        user.push(el.username)
        pass.push(el.password)
        fn.push(el.first_name)
        ln.push(el.last_name)
    })

    let fnIndex = []
    let lnIndex = []

    let data = []

    user.map((el, index) => {
        if (fn) {
            fn.map((el, otherIndex) => {
                otherIndex = otherIndex + 1
                if (fnIndex.length === 10) {
                    return 
                } else {
                    fnIndex.push(otherIndex)
                }
            })
        }
        if (user[index] === username) {
            data.push(username)
            if ((user.indexOf(username) + 1) === fnIndex[index]) {
                data.push(fn[index])
            }
        } 
    })

    pass.map((el, index) => {
        if (fn) {
            ln.map((el, index) => {
                index = index + 1
                if (lnIndex.length == 10) {
                    return 
                } else {
                    lnIndex.push(index)
                }
            })
        }
        if (pass[index] === password) {   
            data.push(password)
            if ((pass.indexOf(password) + 1) === lnIndex[index]) {
                data.push(ln[index])
            }
        }
    })

    console.log(data)

    return (
        <div>
            <div className='form-input'>
                <motion.input id='email' value={username} type={'text'} onChange={(e) => setUsername(e.target.value)} animate={{x : 170}} placeholder='Inserisci la email' />
                <motion.input id='password' type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} animate={{x : 170}} placeholder='Inserisci la password' />
            </div>

            <motion.button className='button-reveal' onClick={handleClick} animate={{x : 86}}>START GAME</motion.button>
            {reveal && (
                <React.Fragment>
                    {
                        data[0] === username && data[2] === password ? 
                            <InterfaceQuestion username={username} firstname={data[1]} lastname={data[3]} /> : 
                        <ErrorValidate />
                    }
                </React.Fragment>
            )}
        </div>
    )
}

export default ButtonStart