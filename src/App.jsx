import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Login from './components/Login';
import Navbar from './components/Navbar';

import { auth } from './firebase';
import Profile from './components/dashboard/Profile';
import Singup from './components/Singup';
import ResetPass from './components/ResetPass';
import Terms from './components/Terms';
import Dashboard from './components/Dashboard';
import GetGamesInfo from './components/dashboard/GetGamesInfo';
import CreateAppointment from './components/dashboard/CreateAppointment';
import Spinner from './components/Spinner';
import Game from './components/Game';
import Workshop from './components/Workshop';
import Sessions from './components/dashboard/Sessions';
import { Resume } from './components/dashboard/Resume';



function App() {

  const [firebaseUser, setFirebaseUser] = useState(false)

  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
          
          if(user){
              setFirebaseUser(user)
          }else{
              setFirebaseUser(null)
          }
      })
    } 
    fetchUser()
  }, [])

  const PrivateRoute = ({componen, path, ...rest}) => {
      if (localStorage.getItem('user')) {
        
        const userStorage = JSON.parse(localStorage.getItem('user'))

        if (userStorage.uid === firebaseUser.uid) {
          return <Route component={componen} path={path} {...rest} />
        } else {
          return <Redirect to ="/singup" {...rest} />
        }
        
      } else {
        return <Redirect to ="/login" {...rest} />
      }
  }

  return  firebaseUser !== false ? (

      <Router>
        <div className="container-fluid" style={{padding: 0}}>
            <Navbar />
          <div >
          <Switch>
            <PrivateRoute component={Dashboard} path="/" exact />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
            <PrivateRoute component={Profile} path="/profile" exact />
            <PrivateRoute component={GetGamesInfo} path="/games-information" exact />
            <PrivateRoute component={Resume} path="/games-information/:id" exact />
            <PrivateRoute component={CreateAppointment} path="/new-game" exact />
            <PrivateRoute component={Sessions} path="/sessions" exact />
            
            <Route component={Login} path="/login" exact />
            <Route component={Workshop} path="/workshop" exact />
            <Route component={Singup} path="/singup" exact />
            <Route component={Game} path="/game" exact />
            <Route component={ResetPass} path="/reset" exact />
            <Route component={Terms} path="/terms-and-conditions" exact />
            <Route component={Workshop} path="/workshops" exact />
            
          </Switch>
          </div>
         
        </div>
      </Router>
   
  ) : <Spinner background={'rgba(250, 250, 250, 0.4)'} />
}

export default App;
