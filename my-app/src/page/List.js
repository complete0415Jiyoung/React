import React from "react";

const User= ({userData}) => {
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList=()=>{
    const users =[
        {email: 'user1@gmail.com', name:'카리나'},
        {email: 'user2@gmail.com', name:'윈터'},
        {email: 'user3@gmail.com', name:'닝닝'},
        {email: 'user4@gmail.com', name:'지젤'},
    ];


    return(
        <table>
            <thead>
                <th>이름</th>
                <th>이메일</th>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    );
}
export default UserList