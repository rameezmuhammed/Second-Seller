import google from "../assets/google.png"
import phone from "../assets/phone.jpg"
import mail from "../assets/mail.png"
import password from "../assets/password.png"

const Login = (props) => {

    return (
    <div className="fixed inset-0 flex items-center
    justify-center bg-purple-600 bg-opacity-60 z-50">
    <div className="bg-white w-96 p-4 rounded-md
    relative text-center">
        <button onClick={() => props?.setLoginPop(false)} 
        className="absolute top-1 right-2 
        text-black text-5xl -mt-1 cursor-pointer">
            &times;
        </button>
        <div className="">
            <h2 className="text-3xl font-bold mb-8">
                Log in with
            </h2>

            <div className="">
                <div className="flex justify-center p-2 mt-4 border-2
                rounded border-gray-500 mr-45 
                bg-gray-50 cursor-pointer">
                    <button className="flex gap-4 cursor-pointer">
                        <img src={google} 
                        className="w-6 mt-2 mb-2"/>
                        <h3 className="font-semibold mt-1.5
                        text-lg -ml-2">
                        Google
                        </h3>
                    </button>                    
                </div>
                <div className="flex justify-center p-2 ml-45 -mt-15 
                border-2 rounded border-gray-500 
                bg-gray-50 cursor-pointer">
                    <button className="flex cursor-pointer">
                        <img src={phone} 
                        className="w-9 mt-2 mb-1.5"/>
                        <h3 className="font-semibold mt-1.5
                         text-lg ml-1">
                            Phone
                        </h3>
                    </button>
                </div>

                <p className="flex justify-center 
                mt-4 gap-3 text-gray-600">                    
                    <p className="">
                        _______________________
                    </p>     
                    <span className="text-2xl">
                        or
                    </span>              
                    <p className="">
                       _______________________
                    </p>
                </p>

                <div>

                    <form action="#"
                    className="">
                        <div className="flex p-2 border-2
                        rounded border-gray-500 mt-8">
                            <img src={mail} 
                            className="w-5 ml-1"/>
                            <input type="email" 
                            placeholder="Email address" 
                            className="ml-3 font-semibold"/>
                        </div>
                    </form>

                    <form action="#"
                    className="">
                        <div className="flex p-2 border-2
                        rounded border-gray-500 mt-6">
                            <img src={password} 
                            className="w-5 ml-1"/>
                            <input type="password" 
                            placeholder="Password" 
                            className="ml-3 font-semibold"/>
                        </div>
                    </form>

                    <div className="cursor-pointer mt-3">
                        <a href="#" className="font-bold 
                        text-gray-600 -ml-54
                        hover:text-gray-900">
                            Forgot Password?
                        </a>
                    </div>

                    <div className="mt-8 border 
                    border-purple-600 bg-purple-600 
                    rounded cursor-pointer hover:bg-purple-900">
                        <button className="font-bold 
                        text-white cursor-pointer
                        mt-2 mb-2">
                            Log In
                        </button>
                    </div>

                    <div className="flex justify-center mt-4 mb-2">
                        <p className="font-semibold">
                            Don't have an account?
                        </p>
                        <a href="#" className="font-semibold
                        ml-1 text-purple-600 hover:text-red-500">
                            Signup
                        </a>
                    </div>

                </div>

            </div>

            
        </div>
    </div>
    </div>

    )    

    

}

export default Login
