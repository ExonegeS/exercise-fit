import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
    const [workout, setWorkout] = useState(null)
    const [poison, setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState('strength_power')

    function updateWorkout() {
        if (muscles.length < 0) {
            return
        }
        let newWorkout = generateWorkout({poison, muscles, goal})
        setWorkout(newWorkout)
        window.location.href = `/#workout`
    }
    return (
        <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white tx-sm sm:text-base'>
            <Hero anchor={'generate'}/>      
            <Generator
                poison={poison}
                setPoison={setPoison}
                muscles={muscles}
                setMuscles={setMuscles}
                goal={goal}
                setGoal={setGoal}
                updateWorkout={updateWorkout}
            />
            {workout && (<Workout workout={workout} />)}
        </main>
    )
}

export default App