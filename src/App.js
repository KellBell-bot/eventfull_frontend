import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './Components/Login'
import { Nav } from './Components/Nav';
import { Signup } from './Pages/Signup'
import { UserDashboard } from './Pages/UserDashboard'

function App() {
  return (
    <div>
      <Nav/>
      <Login />
      
    </div>
  );
}

export default App;
