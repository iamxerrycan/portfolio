import './App.css'
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import AllRoutes from './component/AllRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="main-container">
    <BrowserRouter>
      <Navbar />
        <AllRoutes /> 
      <Footer className="footer" />
    </BrowserRouter>
  </div>
  )
}

export default App

