import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./app.css"
import { LoginForm } from './components/LoginForm'
import { UserDashboard } from './containers/UserDashboard'
import Home from './pages/Home';

function App() {

  const[currentUser, setCurrentUser]= useState({});
  const [error, setError]= useState("");

 useEffect(() =>{
   const token= localStorage.getItem("token")
   if(token){
     fetch('http://localhost:3000/auto_login', {
       headers:{Authorization: `Bearer ${token}`}
     })
     .then(response => response.json())
     .then(data =>{
       setCurrentUser({data}) 
      })
   }
 }, [])

 const handleLogin= () =>{

 }

  const Logout = () => {
    localStorage.clear()
    console.log("Logged Out")
  }
 
  return (
  
    <Router>
      <Home />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <LoginForm />
              <button onClick={Logout}>Logout</button>
            </Route>
            <Route exact path="/dashboard">
              <UserDashboard />
              <button onClick={Logout}>Logout</button> 
            </Route>
          </Switch>
        </div> 
    </Router>
  );
}

export default App;
