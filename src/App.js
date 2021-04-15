import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./app.css"
import { LoginForm } from './Components/LoginForm'
import { Nav } from './Components/Navbar/Nav';
import { Signup } from './Pages/Signup'
import { UserDashboard } from './Pages/UserDashboard'

function App() {

  const[user, setUser]= useState({});
  const [error, setError]= useState("");

 useEffect(() =>{
   const token= localStorage.getItem("token")
   if(token){
     fetch('http://localhost:3000/auto_login', {
       headers:{Authorization: `Bearer ${token}`}
     })
     .then(response => response.json())
     .then(data =>{
       setUser({data})
       console.log(data)  
      })
   }
 }, [])

  const Logout = () => {
    localStorage.clear()
    console.log("Logged Out")
  }
 
  return (
    <Router>
      <div className="App">
        <Nav/>
        <div className="content">
          <Switch>
            <Route path="/">
              <LoginForm />
              <button onClick={Logout}>Logout</button>
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
