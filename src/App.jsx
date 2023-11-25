import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import CatchIt from './components/CatchIt'

function App() { 
  const [currentTime, setCurrentTime] = useState(``); 

  return (
    <>      
      <Clock setCurrentTime={setCurrentTime} />

      <CatchIt currentTime={currentTime}/>
    </>
  )
}

export default App

