import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import AllRoutes from "./component/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
      <Footer className="footer" />
    </BrowserRouter>
  );
}

export default App;
