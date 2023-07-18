import React from 'react'
import './App.css';
import Counter from './pages/Counter'
import { Settings } from './pages/Settings'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path={"/*"} Component={Counter}/>
        <Route path={"/settings"} Component={Settings}/>
      </Routes>
    </div>
  )
}

export default App
