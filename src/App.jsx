import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom"
import Navbar from "./components/Navbar"
import Menubar from "./components/Menubar"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Cars from "./components/Cars"
import Bikes from "./components/Bikes"
import MobilePhones from "./components/MobilePhones"
import Furnitures from "./components/Furnitures"
import Electronics from "./components/Electronics"

function App() {

  return (
    <>

    <Navbar/>
    <Menubar/>

      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/bikes" element={<Bikes/>} />
          <Route path="/phones" element={<MobilePhones/>} />
          <Route path="/furnitures" element={<Furnitures/>} />
          <Route path="/electronics" element={<Electronics/>} />
        </Routes>
      </div>

    <Home/>
    <About/>
    <Footer/>   

    
    </>
  )
}

export default App
