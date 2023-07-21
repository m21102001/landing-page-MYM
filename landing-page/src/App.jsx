import './App.css'
import Aboutus from './Components/Aboutus'
import Developerflutter from './Components/Developerflutter'
import Header from './Components/header/Header'
import Helpus from './Components/Helpus'
import LandTeam from './Components/LandTeam'
import TechnologiesUsed from './Components/TechnologiesUsed/TechnologiesUsed'

function App() {

  return (
      <div className='bg-white h-full dark:bg-slate-800'>
        <Header/>
        <Aboutus/>
        <Helpus/>
        <LandTeam/>
        <TechnologiesUsed/>
        <Developerflutter/>
      </div>
  )
}

export default App
