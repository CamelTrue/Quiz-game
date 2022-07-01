import React, {useState, useEffect} from 'react'
import question from './question.json'
import {motion} from 'framer-motion'
import Axios from 'axios'

const InterfaceQuestion = () => {

    useEffect(() => {
        fetchDataQuestion()
    }, [])
    
    const [randQuestion, setRandQuestion] = useState([])

    const fetchDataQuestion = async () => {
        Axios
            .get('http://127.0.0.1:8000/question')
            .then((res) => {
                const data = res.data
                return setRandQuestion(data)
            })
    }

    const obj2 = {
        question : randQuestion.map(el => {
            return el.question
        })
    }




    const [answer, setAnswer] = useState([])
    const [quest, setQuest] = useState(0)

    const nextQuestion = () => {
        setQuest(quest + 1)
        setAnswer([])

    }

    let fetchDataAnswer = ''

    useEffect(() => {
        fetchDataAnswer()
    }, [quest])

    let a = (quest + 1)
    
    if (answer.length === 0) {
        fetchDataAnswer = async () => {
            Axios
                .get('http://127.0.0.1:8000/answer/' + a)
                .then((res) => {
                    const data = res.data
                    return setAnswer(data)
                })
        }
    }
        
    let arr = []
    
    answer.map(el => {
        arr.push(el)
        console.log(arr)
    })
    
    arr.map(el => {
        console.log(el.id_answer)
    })

    arr.map(el => {
        console.log(el.answer)
    })
    
    arr.map(el => {
        console.log(el.is_correct)
        console.log(el.question.id_questions)
    })

    console.log('Questo e l\'array delle risposte', arr)




    const obj = {
        otherAnswer : arr.map((el, index) => {
            return el.answer
        }),
        answerID : arr.map((el, index) => {
            return el.id_answer
        }),
        answerQuestion : arr.map((el, index) => {
            return el.is_correct
        }),
    }

    console.log('Dimmi che informazioni sono: ', obj.otherAnswer)

    let test = []
    obj2.question.map((el, index) => {
        return test.push(el)
    })

    console.log('Voglio verificare che la variabile delle domande cambi al click: ', a)
    console.log('La variabile dell\'hook: ', answer)
    console.log('La lunghezza dell\'hook answer: ', answer.length)
    
    return (
        <React.Fragment>
            <p>{test[quest]}</p>
            <>
                {
                    obj.otherAnswer.map((el, index) => {
                        return (
                            <p className='text-white'>{el}</p>
                        )
                    })
                }
            </>
            <button className='btn btn-info' onClick={nextQuestion}>Prossima domanda</button>
        </React.Fragment>
    )
}


const Answer = ({otherAnswer, answerID, answerQuestion}) => {
    
    return (
        <div>
            <p>{otherAnswer}</p>
        </div>
    )
}


export default InterfaceQuestion