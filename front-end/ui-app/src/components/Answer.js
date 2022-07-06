import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Answer = ({otherAnswer, answerID, answerQuestion}) => {
    
    // const [answer, setAnswer] = useState([])

    // useEffect(() => {
    //     fetchData()
    // }, [])

    // let a = 1
    // const fetchData = async () => {
    //     Axios
    //         .get('http://127.0.0.1:8000/answer/' + a)
    //         .then((res) => {
    //             const data = res.data
    //             return setAnswer(data)
    //         })
    // }
        
    // let arr = []
    
    // answer.map(el => {
    //     arr.push(el)
    //     console.log(arr)
    // })
    
    // arr.map(el => {
    //     console.log(el.id_answer)
    // })

    // arr.map(el => {
    //     console.log(el.answer)
    // })
    
    // arr.map(el => {
    //     console.log(el.is_correct)
    //     console.log(el.question.id_questions)
    // })


    
    return (
        <div>
            <p>{otherAnswer}</p>
            {/* <p>{answerID}</p>
            <p>{answerQuestion}</p> */}
            {/* <p>Ciao</p>
            {
                arr.map(el => {
                    return (
                        <>
                            <p>{otherAnswer}</p>
                        </>
                    )
                })
            } */}
        </div>
    )
}
    
export default Answer