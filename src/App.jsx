import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertTwoDigit = (number) => {
    return number.toLocaleString('en-US',{
      minimumIntegerDigits: 2
    })
  }

  return (
    <div className=''>
      <h2 className="text-info">A Digital & Analog Clock</h2>
      <h3>{date.toDateString()} {date.a}</h3>
      <hr className='border border-1 border-light' />
      <h1 className="text-warning">
        {convertTwoDigit(date.getHours())}:
        {convertTwoDigit(date.getMinutes())}:
        {convertTwoDigit(date.getSeconds())}&nbsp;
        {date.getHours()<12?"AM":"PM"}
      </h1>
      <hr className='border border-1 border-light' />
    </div>
  )
}

export default App
