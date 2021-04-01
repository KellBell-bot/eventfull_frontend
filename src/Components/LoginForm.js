import { useState } from 'react'
export const LoginForm = ({ Login, error }) => {
 

    const [details, setDetails]= useState({username: "", password: ""})
  
    const handleSubmit = (e) => {
        e.preventDefault();
        Login(details)

    }

    return (

    <form className="login_form" onSubmit={handleSubmit}>
        <h2>Login Here</h2>
            <input type="username" name="username" placeholder="Username"  onChange={(e)=> setDetails({...details, username: e.target.value})} value={details.username} />
             <input type="password" name="password" placeholder="Password"  onChange={(e)=> setDetails({...details, password: e.target.value})} value={details.password} />
        <button type="submit">Login</button>
    </form>
        
    )
}
