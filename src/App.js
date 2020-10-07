import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Events from './Components/Events/Events';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import RegisterEvents from './Components/RegisterEvents/RegisterEvents';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        <Events></Events>
        </Route>
        
        <Route path="/home">
        <Home></Home>
        <Events></Events>
        </Route>

        <Route path="/login">
        <Login></Login>
        </Route>

        <Route path="/registerEvents">
        <RegisterEvents></RegisterEvents>
        </Route>

        <PrivateRoute path="/register">
        <Register></Register>
        </PrivateRoute>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
