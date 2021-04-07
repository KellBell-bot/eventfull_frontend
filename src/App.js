import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginForm } from './Components/LoginForm'
import { Nav } from './Components/Nav';
import { Signup } from './Pages/Signup'
import { UserDashboard } from './Pages/UserDashboard'

function App() {

  const[user, setUser]= useState({});
  const [error, setError]= useState("");

 useEffect(() =>{
   const token= localStorage.getItem("token")
   if(token){
     fetch('http://localhost:3000/persist', {
       headers:{Authorization: `Bearer ${token}`}
     })
     .then(response => response.json())
     .then(data =>{
              // console.log(data)
       setUser({name: data.name, username: data.username})  
     })
   }
 }, [])

  const Logout = () => {
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
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
