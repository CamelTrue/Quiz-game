import React, {useState, useEffect} from 'react'

export default function DataFetching() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await fetch('http://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err)
            })
        }

    return (
        <div>
            {users.map((user) => {
                return <p key={user.id}>{user.name}</p>
            })}
        </div>
    );
}