import React from 'react'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import './app.css';
import UserList from './pages/userList/UserList'
import {BrowserRouter as Router,
  Switch,
  Route
  
  } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Topbar/>
        <div className="container" >
          <Sidebar/>
          <Switch>
            <Route exact path="/">
               <Home/>
            </Route>

            <Route path="/users">
               <UserList/>
            </Route>

          </Switch>
        </div>
      
     </Router>
   
  );
} 

export default App;
