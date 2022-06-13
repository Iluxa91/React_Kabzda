import React, {useEffect, useState} from 'react';
import './App.css';

let dateTo2digitNumb = (numb: number) => {
    return numb > 9 ? numb : '0' + numb
}

function App() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date)

        }, 1000)

        return () => {clearInterval(intervalId)}
    }, [])
    // let stringHours = hours.toLocaleTimeString()

    const setTrueHours = dateTo2digitNumb(date.getHours())
    const setTrueMinutes = dateTo2digitNumb(date.getMinutes())
    const setTrueSeconds = dateTo2digitNumb(date.getSeconds())

    return (
        <div>
            Hello, now {setTrueHours}:
            {setTrueMinutes}:
            {setTrueSeconds}
        </div>
    );
}

export default App;
