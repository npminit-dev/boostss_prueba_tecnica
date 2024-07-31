import { Link, Outlet } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='main_background'>
      <div className='bg-primary/60'>
        <NavBar/>
        <main className='smth_appear'>
          <div className='max-w-[1700px] flex items-center justify-center'>
            <Outlet/>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
