import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginAdmin from './Pages/AdminsPages/Login/LoginAdmin'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div>
        <Routes>
          <Route eact path="/" element={<Home />} />
          <Route eact path='/admin/login' element={<LoginAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App