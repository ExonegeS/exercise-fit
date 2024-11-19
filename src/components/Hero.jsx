import React from 'react'
import Button from './Button'

export default function Hero(props) {
    const {anchor} = props;
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
            <div className="flex flex-col gap-4 p-4">
                <p>IT'S TIME TO</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-blue-400'>EX</span>ercise</h1>
            </div>
            <p className='text-sm md:text-base font-light'>I herebly acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelivable exercised</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass monstrosity</span>, afficted with severe body dismorphia, unable to fit through doors.</p>
            <Button func={()=>{
                window.location.href = `/#${anchor || 'home'}`
            }} text={'Accept & Begin'}/>
        </div>
    )
}
