import profileIcon from "../assets/profile_icon.png"
import mail from "../assets/mail.png"
import password from "../assets/password.png"

const Signup = (props) => {
  return (
    <div className="fixed inset-0 flex items-center
    justify-center bg-purple-600 bg-opacity-60 z-50">

      <div className="bg-white w-96 p-4 rounded-md
        relative text-center">

        <button onClick={() => props?.setSignupPop(false)} 
        className="absolute top-1 right-2 
        text-black text-5xl -mt-1 cursor-pointer">
            &times;
        </button>

        <h1 className="text-4xl font-semibold 
        text-purple-800 mb-10">
            Sign Up
        </h1>

        <div className="">

            <form action="#">
                <div className="flex p-4 border-2
                    rounded border-gray-200 
                    bg-gray-200 mt-8 ml-4 mr-4">
                    <img src={profileIcon} 
                    className="w-5"/>
                    <input type="text" placeholder="Full Name" 
                    className="ml-4 font-semibold"/>
                </div>
            </form>

            <form action="#">
                <div className="flex p-4 border
                    rounded border-gray-200 
                    bg-gray-200 mt-8 ml-4 mr-4">
                    <img src={mail} 
                    className="w-5"/>
                    <input type="email" placeholder="Email Address" 
                    className="ml-4 font-semibold"/>
                </div>
            </form>

            <form action="#">
                <div className="flex p-4 border
                    rounded border-gray-200 
                    bg-gray-200 mt-8 ml-4 mr-4">
                    <img src={password} 
                    className="w-5"/>
                    <input type="password" placeholder="Password" 
                    className="ml-4 font-semibold"/>
                </div>
            </form>

            <div className="cursor-pointer mt-3 mb-6">
                <a href="#" 
                className="font-bold 
                        text-gray-600 -ml-45
                        hover:text-gray-900">
                    Forgot Password?
                </a>
            </div>


            <div className="flex justify-center gap-4 mt-8">
                <div className="border 
                    border-purple-600 bg-purple-600 
                    rounded-full cursor-pointer hover:bg-purple-900">
                    <button className="font-semibold 
                        text-white cursor-pointer
                        mt-2 mb-2 ml-14 mr-14">
                        Sign Up
                    </button>
                </div>
                
                <div className="border 
                    border-gray-100 bg-gray-300 
                    rounded-full cursor-pointer hover:bg-gray-400">
                    <button className="font-semibold 
                        text-gray-600 cursor-pointer
                        mt-2 mb-2 ml-14 mr-14">
                        Log In
                    </button>
                </div>
            </div>

                            

        </div>
      </div>
    </div>
  )
}

export default Signup
