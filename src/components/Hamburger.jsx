import { useState } from "react"
import Login from "../components/Login"
import Signup from "./Signup"

const Hamburger = (props) => {

    const [loginPop, setLoginPop] = useState(false)    
  const [signupPop, setSignupPop] = useState(false);

  return (

    <>

    <div className="fixed inset-0 flex items-center
     justify-center bg-purple-600 bg-opacity-60 z-50">
      <div className="bg-white w-96 p-4 rounded-md
        relative text-center">
        <div>
            <button onClick={() => props?.setHamburgerPop(false)} 
                className="absolute top-1 right-2 
                text-black text-5xl -mt-1 cursor-pointer">
                &times;
            </button>

            <div>
                <div className="text-4xl font-semibold mt-14 mb-6">
                    <h1>
                        <button className="mt-4 mb-4 cursor-pointer
                        hover:text-purple-600">
                            Location
                        </button>
                    </h1>
                    <h1>
                        <button className="mt-4 mb-4 cursor-pointer -ml-8
                        hover:text-purple-600">
                            Search
                        </button>
                    </h1>
                    <h1>
                        <button className="mt-4 mb-4 cursor-pointer -ml-20
                       hover:text-purple-600 ">
                            Sell
                        </button>
                    </h1>
                    <h1  onClick={() => setLoginPop(!loginPop)}>
                        <button className="mt-4 mb-4 cursor-pointer -ml-12
                        hover:text-purple-600">
                            Login
                        </button>
                    </h1>
                    <h1  onClick={() => setSignupPop(!signupPop)} >
                        <button className="mt-4 mb-4 cursor-pointer -ml-6
                       hover:text-purple-600 ">
                            Signup
                        </button>
                    </h1>
                </div>
            </div>

        </div>
      </div>
    </div>

    {loginPop && <Login setLoginPop={setLoginPop}/>}
    {signupPop && <Signup setSignupPop={setSignupPop}/>}

    </>

  )
}

export default Hamburger
