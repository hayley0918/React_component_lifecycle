import React, { useState, useEffect } from 'react'
import './Clock.css'

function HookClock(){
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date().toLocaleTimeString())
        }, 1000)
    })

    return(
        <div>
            <h1>Clock with Hooks</h1>
            <h2>It is {date}</h2>
            <h3>Hooks?</h3>
            <ul>
                <li>hooks are functions that let you hook into react state and lifecycle features from function components</li>
                <li>hooks don't work inside of classes they let you use react without classes</li>
                <li>react provides a few built-in hooks like useState() and useEffect()</li>
            </ul>
        </div>
    )
}

export default HookClock