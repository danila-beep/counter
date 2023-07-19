import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Counter from './pages/CounterPage/Counter';
import { Settings } from './pages/CounterPage/Settings';
import HomePage from './pages/HomePage/HomePage';
import Clock from './pages/ClockPage/Clock';
import Timer from './pages/TimerPage/Timer';
import TimerPage from './pages/TimerPage/TimerPage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path={"/*"} Component={HomePage}/>
        <Route path={"/counter"} Component={Counter}/>
        <Route path={"/counter/settings"} Component={Settings}/>
        <Route path={"/clock"} Component={Clock}/>
        <Route path={"/timer"} Component={TimerPage}/>
      </Routes>
    </div>
  )
}

export default App
