import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

export const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            history.push('/dashboard')
        })
        setUsername("")
        setPassword("")
    }

    return(
        <div>
            <div>
            <h1>Log In</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 




// import React, { useState } from 'react'

// export const LoginForm = () => {
 
//     const [username, setUsername]= useState("");
//     const [password, setPassword]= useState("");

//     const onChangeUsername = (e) =>{
//         setUsername(e.target.value);
//     };

//     const onChangePassword = (e) => {
//         setPassword(e.target.value);
//     };
  
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:3000/login', {
            
//             method: 'POST',
//             header: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             localStorage.setItem('token', data.jwt)  
//         })
//         setUsername("")
//         setPassword("")
        
//     };

//     return (
//     <div>
//         <form className="login_form" onSubmit={handleSubmit}>
//             <h2>Login Here</h2>
//                 <label>Username</label>
//                 <input value={username} onChange={onChangeUsername} type="text" placeholder="Username"/>
                
//                 <label>Password</label>
//                 <input value={password} onChange={onChangePassword} type="password" placeholder="Password"/>
//             <button type="submit">Login</button>
//         </form>
//     </div>
        
//     )
// }
