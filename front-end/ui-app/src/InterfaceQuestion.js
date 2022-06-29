import React, {useState, useEffect} from 'react'
import question from './question.json'
import {motion} from 'framer-motion'

const InterfaceQuestion = () => {

    let arr = []

    // Assegno alla chiave il riferimento della domanda
    const matcher = {
        one : question[1].answer[0].first_answer,
        two : question[1].answer[1].second_answer,
        three : question[1].answer[2].third_answer,
        four : question[1].answer[3].fourth_answer,
        five : question[1].answer[4].fifth_answer,
        six : question[1].answer[5].sixth_answer,
        seven : question[1].answer[6].seventh_answer,
        eight : question[1].answer[7].eighth_answer,
        nine : question[1].answer[8].ninth_answer,
        ten : question[1].answer[9].tenth_answer,
    }

    // Hook per tenere traccia dello stato di count ( sarà essenziale )
    const [count, setCount] = useState(0)

    switch (count) {
        case 0:
            arr = []
            // Mi faccio ritornare tutti i valori delle domande tramite Object.values
            // Con map vado a mappare ricorsivamente tutti i dati che arriveranno dal mio json che ho racchiuso dentro matcher.one per il primo gruppo di risposte 
            Object.values(matcher.one).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 1:
            arr = []
            Object.values(matcher.two).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 2:
            arr = []
            Object.values(matcher.three).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 3:
            arr = []
            Object.values(matcher.four).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 4:
            arr = []
            Object.values(matcher.five).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 5:
            arr = []
            Object.values(matcher.six).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 6:
            arr = []
            Object.values(matcher.seven).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 7:
            arr = []
            Object.values(matcher.eight).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 8:
            arr = []
            Object.values(matcher.nine).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
        case 9:
            arr = []
            Object.values(matcher.ten).map((value) => {
                arr.push(value)
                if (arr.length === 5) {
                    return arr
                }
            })
            break
    }

    const incrementCount = () => {
        return setCount(count + 1)
    }
    
    return (
        <motion.section id='section-iq' 
            animate={{ x : 100, scale : 1 }}

            // Con initial definisco la posizione di partenza del mio elemento allo start dell'animazione
            initial={{ scale : 0 }}
        >
            <div className='title-section-iq'>{count < 10 ? question[0].question[count] : <p>Domande finite</p>}</div>
            {
                // easter egg
                useEffect(() => {
                    const timer = setTimeout(() => {
                        console.log('Trovato 1, perchè non provi a trovare anche 2 e 3')
                    }, 1000);
                    return () => clearTimeout(timer);
                }, [])
            }
            <React.Fragment>
                {
                    arr.map((el, index) => {
                        return (
                            <div className='d-flex custom-container-question' key={index}>
                                <motion.input
                                    animate={{ x : 10}}
                                    initial={{ x : 100 }}
                                    type='radio'
                                    id={'input' + (index + 1)}
                                    name='radio'
                                    value={el}
                                />
                                <span id='slider' />
                                <p className='possible-question-iq mx-3'>{count < 10 ? el : <span>Non ci sono più risposte</span>}</p>
                            </div>
                        )
                    })
                }
            </React.Fragment>

            <button className='btn-qi-custom' onClick={incrementCount}>Prossima domanda</button>
        </motion.section>
    )
}

export default InterfaceQuestion