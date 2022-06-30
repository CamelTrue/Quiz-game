import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Answer = (props) => {
    
    const [answer, setAnswer] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const [count, setCount] = useState(1)

    const params = {count}
    const fetchData = async () => {
        Axios
            .get('http://127.0.0.1:8000/answer/', 
            {params})
            .then((res) => {
                const data = res.data
                return setAnswer(data)
            })
    }

    const test = () => {
        return setCount(2)
    }
    
    return (
        <React.Fragment>
            {
                answer.map((el) => {
                    test()
                    return (
                        <p>{el}</p>
                    )
                })
            }
        </React.Fragment>
        )
    }
    
export default Answer