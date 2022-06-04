import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  let a = new Date()
const [hours,setHours]=useState(a.getHours())
const [minutes,setMinutes]=useState(a.getMinutes())
const [seconds,setSeconds]=useState(a.getSeconds())

  useEffect(()=>{
    setInterval(()=>{
      let a = new Date()
      setHours(a.getHours())
      setMinutes(a.getMinutes())
      setSeconds(a.getSeconds())
    },1000)
  },[])


  return (
    <div>
      Hello, now {hours}:{minutes}:{seconds} o'clock
    </div>
  );
}

export default App;
