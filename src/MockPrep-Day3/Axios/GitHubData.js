import React, { useEffect, useState } from 'react'
import axios from 'axios'
function GitHubData() {
    let [user, setUser] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUser(res.data);
        }).then((err) => {
            console.log(err)
        })
    }, []);
    return (
        <div>

            <table border={"2px"} width={"100%"} style={{textAlign : "center"}} cellPadding={"5em"} cellSpacing={"5em"}>
                <thead>
                   <tr>
                   <th>Name</th>
                   <th>Phone</th>
                   </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GitHubData
