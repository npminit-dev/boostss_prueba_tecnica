import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import Footer from './components/footer/Footer'
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate()
  let { pathname } = useLocation()

  useEffect(() => {
    if(pathname === '/') navigate('/home')
  }, [pathname]);

  return (
    <div className='main_background'>
      <div className='bg-primary/60'>
        <NavBar/>
        <main id='main' className='smth_appear'>
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
