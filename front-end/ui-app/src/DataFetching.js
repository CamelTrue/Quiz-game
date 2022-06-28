import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function DataFetching() {

    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetchData()
    // }, [])

    // const fetchData = async () => {
    //     fetch('http://127.0.0.1:8000/user')
    //         .then(res => {
    //             console.log(res.data);
    //             const data = res.data;
    //             return setUsers(data);
    //         })
    //     }

    //     console.log(users)

    // return (
    //     <div>
    //         {users.map((user) => {
    //             return <p key={user.id_user}>{user.username}</p>
    //         })}
    //     </div>
    // );

    const [data, setData] = useState('')

    const fetchApi = async () => {
        await axios.get("127.0.0.1:8000/user")
            .then((response) => {
                const api = response.data // response object
                return setData(api)
            })
    }

    console.log(data)

    useEffect(() => {
        fetchApi() // actually go fetch!
    }, [])
    
        // JSON.stringify() make a printable object (string) out of anything
    return (
        <div>
            {
                JSON.stringify(data)
            } 
        </div>
    )
}