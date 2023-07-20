import './App.css'
import Header from './Components/header/Header'
import TechnologiesUsed from "./Components/TechnologiesUsed/TechnologiesUsed.jsx";
import LandTeam from "./Components/LandTeam.jsx";

function App() {

  return (
      <div className='bg-white h-full dark:bg-slate-800'>
        <Header/>
          <LandTeam/>
          <TechnologiesUsed/>
      </div>
  )
}

export default App
