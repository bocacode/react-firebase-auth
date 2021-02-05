import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from 'firebase'
import Home from './scenes/home'
import SignUp from './scenes/signup'
import Login from './scenes/login'
import { config } from './config'

firebase.initializeApp(config)

export const AuthContext = createContext(null)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <Router>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
