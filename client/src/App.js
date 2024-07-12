import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginAdmin from './Pages/AdminsPages/Login/LoginAdmin'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route eact path="/" element={<Home />} />
          <Route eact path='/admin/login' element={<LoginAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App