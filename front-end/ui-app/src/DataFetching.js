// import React, {useState, useEffect} from 'react'
// import Axios from 'axios'

// export default function DataFetching() {

//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         fetchData()
//     }, [])

//     const fetchData = async () => {
//         Axios
//             .get('http://127.0.0.1:8000/user', 
//                 res.writeHead(200, {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*'
//             }))
//             .then((res) => {
//                 const data = res.json()
//                 return setUsers(data)
//             })
//     }

//     return (
//         <div>
//             {
//                 users.map((user) => {
//                    <p key={user.id_user}>{user.username}</p>
//                 })
//             }
//             {users}
//         </div>
//     );
// }