import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
const [hours,setHours]=useState(new Date())


  useEffect(()=>{
    setInterval(()=>{
      setHours(new Date)

    },1000)
  },[])
 let stringHours = hours.toLocaleTimeString()

  return (
    <div>
      `Hello, now {stringHours}`
    </div>
  );
}

export default App;
