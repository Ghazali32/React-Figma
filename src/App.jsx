// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/SideBar'
import { NavBar } from './components/NavBar'
import { StepBar } from './components/StepBar'
import { Body } from './components/Body'

function App() {
  return (
   <div className = 'w-screen h-screen flex overflow-x-hidden'>
    <SideBar></SideBar>
    <div className='ml-56 h-screen w-full'>
      <NavBar></NavBar>
      <StepBar></StepBar>
      <Body></Body>
    </div>
   </div>
  ) 
}


// as

export default App
