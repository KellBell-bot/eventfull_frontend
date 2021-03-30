import { useState } from 'react'
export const Login = () => {
    return (
        <div className="login">
            <form className="login_form">
                <h2>Login Here</h2>
                <input type="username" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
