import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Platform from './components/platform'
import Contacts from './components/contacts'
import Footer from './components/footer'
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
      <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Platform/>
      <Contacts/>
    <Footer/>
   
    </div>
    <Toaster/>
      </>


  )
}

export default App
