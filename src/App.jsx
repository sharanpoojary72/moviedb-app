import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'


function App() {

  
  return (
    <div className='wrapper'>
      <header >
        <Navbar/>
      </header>

      <main className='mainContent'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
