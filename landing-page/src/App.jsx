import './App.css'
import Developerflutter from './Components/Developerflutter'
import Header from './Components/header/Header'
import LandTeam from './Components/LandTeam'
import TechnologiesUsed from './Components/TechnologiesUsed/TechnologiesUsed'
import Helpus from './Components/Helpus'
import Footer from './Components/footer/Footer'

function App() {

  return (
      <div className='bg-white h-full dark:bg-slate-800'>
        <Header/>
        {/* <Developerflutter/> */}
        <Helpus/>
        <TechnologiesUsed/>
        <LandTeam/>
        <Developerflutter/>
        <Footer/>

      </div>
  )
}

export default App
