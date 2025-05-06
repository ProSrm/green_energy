
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AppRouter from './Router/AppRouter'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter></AppRouter>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
