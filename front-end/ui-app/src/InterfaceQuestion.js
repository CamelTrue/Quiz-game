import React, {useState, useEffect} from 'react'
import question from './question.json'
import {motion} from 'framer-motion'
import Axios from 'axios'

const InterfaceQuestion = () => {

    useEffect(() => {
        fetchData()
    }, [])
    
    const [randQuestion, setRandQuestion] = useState([])

    const fetchData = async () => {
        Axios
            .get('http://127.0.0.1:8000/question')
            .then((res) => {
                const data = res.data
                return setRandQuestion(data)
            })
    }
    
    return (
        <React.Fragment>
            {/* <Answer /> */}
            {
                randQuestion.map((el, index) => {
                    return (
                        <p key={index}>{el.question}</p>
                    )
                })
            }
        </React.Fragment>
    )
}


// const Answer = () => {
//     const [answer, setAnswer] = useState([])

//     useEffect(() => {
//         fetchData()
//     }, [])


//     // const params = 1
//     const fetchData = async () => {
//         Axios
//             .get('http://127.0.0.1:8000/answer/' + 1)
//             .then((res) => {
//                 const data = res.data
//                 return setAnswer(data)
//             })
//     }

//     return (
//         <React.Fragment>
//             {
//                 answer.map((el) => {
//                     return (
//                         <>
//                             <p key={el.id_answer}>{el}</p>
//                         </>
//                     )
//                 })
//             }
//         </React.Fragment>
//     )
// }


export default InterfaceQuestion