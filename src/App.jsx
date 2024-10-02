import { useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState({})

  setInterval(() => {
    const hours = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
    const minutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()
    const seconds = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()
    setTime({
      hours,minutes,seconds
    })
  }, 1000)
  return (
    <>
      <div className="container">
        <h2>{time.hours}</h2>
        <h2>:{time.minutes}:</h2>
        <h2>{time.seconds}</h2>
      </div>
    </>
  )
}

export default App
