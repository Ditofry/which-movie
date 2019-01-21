import React, { Component } from 'react'
import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom'

import './App.css'
import { firebaseInit } from './firebase'
import Event from './pages/events'
import Login from './pages/login'
import Movies from './pages/movies'

class App extends Component {
  constructor (props: any) {
    super(props)
    firebaseInit()
  }

  public render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/movies">Movies</Link></li>
            </ul>

            <Route exact={true} path="/" component={Event}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/login" component={Login}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
