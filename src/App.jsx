
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import AllRoutes from "./component/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="custom-toast"
      />
      <AllRoutes />
      <Footer className="footer" />
    </BrowserRouter>
  );
}

export default App;
