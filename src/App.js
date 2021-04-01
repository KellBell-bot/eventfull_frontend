import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginForm } from './Components/LoginForm'
import { Nav } from './Components/Nav';
import { Signup } from './Pages/Signup'
import { UserDashboard } from './Pages/UserDashboard'

function App() {

  const[user, setUser]= useState({username: "", password: ""});
  const [error, setError]= useState("");

  const Login = details => {
    console.log(details)
  }

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
              <LoginForm Login={Login} error={error}/>
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
