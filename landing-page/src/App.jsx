import './App.css'
import Aboutus from './Components/Aboutus'
import Developerflutter from './Components/Developerflutter'
import Header from './Components/header/Header'
import Helpus from './Components/Helpus'
import LandTeam from './Components/LandTeam'
import TechnologiesUsed from './Components/TechnologiesUsed/TechnologiesUsed'
import Footer from './Components/footer/Footer'
import Services from './Components/serveces/Services'
// import BsWhatsapp from '@headlessui/react'
import {BsWhatsapp} from'react-icons/bs'
function App() {

  return (
      <div className='bg-white h-full dark:bg-slate-800'>
        <Header/>
        <Aboutus/>
        <Services/>
        <Helpus/>
        <LandTeam/>
        <TechnologiesUsed/>
        <Developerflutter/>
        <Footer/>
        <div className="w-12 h-12 fixed left-5 bottom-5 rounded-lg bg-lime-700 hover:bg-lime-500 active:bg-lime-500 focus:outline-none focus:ring focus:ring-lime-300 flex flex-row justify-center items-center">
          <a href="https://wa.me/qr/2PUHCENU7QALF1" >
        <BsWhatsapp className='' />
          </a>
        </div>
      </div>
  )
}

export default App
