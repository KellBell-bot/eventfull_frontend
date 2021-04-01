import { useState } from 'react'
export const LoginForm = ({ Login, error }) => {
 
    const loginURL='http://localhost:3000/login'
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const onChangeUsername = (e) =>{
        const username= e.target.value
        setUsername(username);
    };

    const onChangePassword = (e) =>{
        const password= e.target.value
            setPassword(password);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        let userDetails={
            username: username,
            password: password
        }

        fetch(loginURL,{
            method: 'POST',
            header: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(userDetails)
        })
        
    };

    return (

    <form className="login_form" onSubmit={handleSubmit}>
        <h2>Login Here</h2>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            name="username" 
            value={username}
            placeholder="Username"  
            onChange={onChangeUsername}/>
            <label htmlFor="password">Password</label>
            <input 
            type="text"
             name="password" 
             value={password}
             placeholder="Password"  
             onChange={onChangePassword}  />
        <button type="submit">Login</button>
    </form>
        
    )
}
