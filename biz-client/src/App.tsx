import "./App.css";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { ToastContainer} from 'react-toastify'
import Home from "./components/Home";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import AddCard from "./components/AddCard";
import EditCard from "./components/EditCard";
import Cart from "./components/Cart";
import BizRegister from "./components/BizRegister";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/biz-register" element={<BizRegister />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards">
            <Route index element={<Cards />} />
            
            {/* Editing card by its ID */}
            <Route path="edit/:id" element={<EditCard />} />
          </Route>
          <Route path="/addCards" element={<AddCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
