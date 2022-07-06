import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import Axios from 'axios'

let textExample = []
let isCorrect = []

const InterfaceQuestion = (props) => {

    const hideElement = () => {
        document.querySelector('.title-question').style.display = 'none'
        document.querySelector('.btn-hide').style.display = 'none'
        document.querySelector('.interface-score').style.marginRight = '30vw'
    }

    let enabled = true

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
    })


    const obj = {
        otherAnswer : arr.map((el, index) => {
            return el.answer
        }),
        answerID : arr.map((el, index) => {
            return el.id_answer
        }),
        score : arr.map((el, index) => {
            return el.is_correct
        }),
    }


    let test = []
    obj2.question.map((el, index) => {
        return test.push(el)
    })

    const ans = obj.score
    
    return (
        <React.Fragment>
            <motion.div initial={{x : 100}} animate={{x : 0}} className='title-question'>{test[quest]}</motion.div>
            <motion.div className='animate' initial={{x : 100}} animate={{x : 0}}>
                {
                    obj.otherAnswer.map((el, index) => {
                        return (
                            <div 
                                correct={ans[index]}
                                onClick={() => {
                                    if (enabled == true) {
                                        ans[index] === 1 ? textExample.push(ans[index]) : textExample.push(0)
                                        
                                        if (ans[index] === 1) {
                                            isCorrect.push(ans[index])
                                        }
                                        enabled = false
                                    }
                                }}
                                className='color'
                                key={index}
                            >
                                {el}
                            </div>
                        )
                    })
                }
            </motion.div>
            
            <motion.div className='interface-score' initial={{x : -100, y : 30}} animate={{x : -40}}>
                <span className='score'>
                    {
                        textExample.length !== 0 ? 
                            textExample.length === 10 ? 
                                `Il punteggio di ${props.username} e\' stato di ${isCorrect.length} punti su ${textExample.length} in data ${new Date().toLocaleDateString()}` : 
                            textExample.slice(-1)[0] === 1 ? 
                                <span className='score'>Corretta</span> : 
                            <span className='score'>Non corretta</span> : 
                        <span className='score'>Inserisci una risposta</span>
                    }
                </span>
                {
                    textExample.length === 10 ? hideElement() : console.log('textExample non e\' ancora arrivata a 10: ', textExample.length)
                }
            </motion.div>
            
            <button className='btn btn-info btn-hide' onClick={nextQuestion}>Prossima domanda</button>
        </React.Fragment>
    )
}

export default InterfaceQuestion