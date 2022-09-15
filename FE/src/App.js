import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CardProduct from "./components/CardProduct/CardProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Login />} /> 
      {/* <Route path="/login" exact element={<Login />} />  */}
      <Route path="/register" exact element={<Register />} /> 
        {/* <Route path="/" exact element={<Navbar />} /> */}
        <Route path="/home" exact element={<Home />} /> 
        {/* <Route path="/footer" exact element={<Footer />} /> */}
        <Route path="/home/cardProduct/:id" exact element={<CardProduct />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
