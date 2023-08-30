import './App.scss'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
import SecPage from './Pages/SecPage/SecPage'
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SecPage' element={<SecPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
