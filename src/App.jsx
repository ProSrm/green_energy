
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AppRouter from './Router/AppRouter'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter></AppRouter>
      </BrowserRouter>
    </>
  )
}

export default App
