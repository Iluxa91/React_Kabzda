import React, {useEffect, useState} from 'react';
import './App.css';

let dateTo2digitNumb = (numb: number) => {
    return numb > 9 ? numb : '0' + numb
}

function App() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log('effect')

        const intervalId = setInterval(() => {
            console.log('interval')
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

export const SetTimoutExample = () => {
    const [text,setText] = useState('')

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            console.log('timeout')
            setText('3seconds')
        },3000)
        return ()=>{
            clearTimeout(timeoutId)
        }
    },[])
    return <>
        text:{text}
    </>
}
 export const KeyPressInfo = () => {
    const [text,setText] = useState('')
     console.log('keypressRender')
     useEffect(()=>{
         const handler = (e:KeyboardEvent) => {
             console.log(e.key)
             setText(text+e.key)
         }
         window.addEventListener('keypress',handler)
         return () => {
            window.addEventListener('keypress',handler)
         }
     },[text])
     return <>
         text: {text}
     </>
 }