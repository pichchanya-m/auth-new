import React from 'react'
import Navbar from '../components/navbar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen 
    bg-white '>
       <Navbar/>
       <Header/>
    </div>
  )
}

export default Home