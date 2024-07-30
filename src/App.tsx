import { Link, Outlet } from 'react-router-dom'
import NavBar from './navigation/NavBar'

function App() {

  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
