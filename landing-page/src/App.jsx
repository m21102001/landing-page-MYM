import './App.css'
import Aboutus from './Components/Aboutus'
import Developerflutter from './Components/Developerflutter'
import Footer from './Components/footer/Footer'
import Header from './Components/header/Header'
import Helpus from './Components/Helpus'
import LandTeam from './Components/LandTeam'
import TechnologiesUsed from './Components/TechnologiesUsed/TechnologiesUsed'
import Footer from './Components/footer/Footer'
import Services from './Components/serveces/Services'
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
      </div>
  )
}

export default App
