import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Countries from './components/Countries/Countries'
import Country from './components/Country/Country'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<Country />}></Route>
      </>
    </Router>
  )
}

export default App
