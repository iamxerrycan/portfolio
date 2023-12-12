import { useState } from 'react'
import './App.css'
import store from './store/store';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import AllRoutes from './component/AllRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="main-container">
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <AllRoutes />
      </div>
      <Footer className="footer" />
    </BrowserRouter>
  </div>
  )
}

export default App

