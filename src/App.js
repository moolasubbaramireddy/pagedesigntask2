import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/mainpage/Products";
import Home from "./components/mainpage/Home";
import LogIn from "./components/mainpage/LogIn";


function App() {
  return (
    <div >
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
