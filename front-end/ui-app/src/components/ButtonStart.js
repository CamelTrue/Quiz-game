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

    let data = []

    user.map((el) => {
        if (el === username) {
            data.push(username)
        }
    })

    pass.map((el) => {
        if (el === password) {
            data.push(password)
        }
    })

    // fn.map((el) => {
    //     if (el === firstname) {
    //         data.push(firstname)
    //     }
    // })

    // ln.map((el) => {
    //     if (el === lastname) {
    //         data.push(lastname)
    //     }
    // })

    // console.log(fn, ln)
    
    // console.log(JSON.stringify(users[0]).includes(JSON.stringify('Marco')))

    // console.log(fn)

    // console.log(users[0].first_name)

    console.log(users)

    

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
                        data[0] === username && data[1] === password ? <InterfaceQuestion username={username} firstname={data[2]} lastname={data[3]} /> : <ErrorValidate />
                    }
                </React.Fragment>
            )}
        </div>
    )
}

export default ButtonStart