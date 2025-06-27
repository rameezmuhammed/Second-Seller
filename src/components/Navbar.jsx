import logo from "../assets/logoo.png"
import lens from "../assets/lens.jpg"
import arrow from "../assets/arrow.svg"
import search from "../assets/search.png"
import { useState } from "react"
import Login from "../components/Login"
import Signup from "./Signup"
import hamburger from "../assets/hamburger.png"
import Hamburger from "./Hamburger"
import sell from "../assets/sell.png"

const Navbar = (props) => {

  const [loginPop, setLoginPop] = useState(false);
  const [signupPop, setSignupPop] = useState(false);
  const [hamburgerPop, setHamburgerPop] = useState();


  return (

  <>

    <div className="fixed w-full">
        <div className="flex shadow-sm 
      cursor-pointer bg-purple-200">
        <img src={logo} 
          className="w-35 ml-6 mt-2 mb-2"/>

          <div className="fixed top-0 right-0 flex mr-70">
          <div className="hidden md:flex border-2 border-spacing-1 
            h-12 p-2 border-black -ml-26 mt-5 
          bg-white rounded overflow-hidden
          md:w-35 lg:w-70">
              <img src={lens} className="w-5 h-5 mt-1"/>
              <input placeholder="Kerala" 
              className="p-2 md:mr-14 lg:mr-50"/>
              <img src={arrow} className="-ml-35
              md:-ml-45"/>
          </div>

          <div className="hidden md:flex border-2 border-spacing-1 
          h-12 w-30 p-2 border-black bg-white
          ml-4 mt-5 rounded overflow-hidden
          md:w-35 lg:w-70">
            <input onClick={(e) => props?.setSearch
              (e.target.value)} placeholder="Search" 
              className="ml-1 mr-1 md:mr-21 lg:mr-51"/>
            <img src={search} className="w-11 h-11 bg-black 
            -ml-41 -mt-2 p-2 lg:-ml-41 md:-ml-46"/>
          </div>
        </div>        

        <div className="fixed top-0 right-0 mr-49 mt-3
        hover:mr-47 hover:mt-1.5">
            <img src={sell} 
            className="hidden md:block w-18 h-16 
            hover:w-22 hover:h-20"/>
        </div>    

        <div className="md:flex fixed right-0 mt-6 mr-2
        hidden">
          <div onClick={() => setLoginPop(!loginPop)} 
            className="flex mr-4">
            <button className=" font-semibold
            text-white bg-purple-600 rounded-full
            hover:bg-purple-900 cursor-pointer pl-4 pr-4
            pt-2 pb-2">
              Login
            </button>
          </div>

          <div onClick={() => setSignupPop(!signupPop)} 
          className="flex">
            <button className="font-semibold pr-4 pl-4
            text-purple-600 bg-white border-2 rounded-full
            hover:bg-gray-400 hover:text-purple-800 cursor-pointer">
              Signup
            </button>
          </div>
        </div>

        <div onClick={() => setHamburgerPop(!hamburgerPop)} 
          className="fixed top-0 right-0 mr-4">
          <img src={hamburger} 
          className="w-8 mt-8 md:hidden"/>
        </div>

        
      </div>
    </div>

  

  {loginPop && <Login setLoginPop={setLoginPop}/>}
  {signupPop && <Signup setSignupPop={setSignupPop}/>}
  {hamburgerPop && <Hamburger setHamburgerPop={setHamburgerPop}/>}

  </>
    
  )
}

export default Navbar
