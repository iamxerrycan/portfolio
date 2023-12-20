import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import AllRoutes from "./component/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <ToastContainer    position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'green',
          fontSize: '14px',
          maxWidth: '300px',
          maxHeight:"50px",
          borderRadius: "20px"
        }}/>
      <AllRoutes />
      <Footer className="footer" />
    </BrowserRouter>
  );
}

export default App;
