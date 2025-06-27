import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import yt from "../assets/youtube.png"
import x from "../assets/x.webp"

const Footer = () => {
  return (
    <div className="bg-black h-45
    sm:h-55 md:h-65 lg:h-75">
        <div className=" text-white -ml-7">
            <h1 className="flex justify-center gap-20
                 text-sm font-bold -ml-7
                 sm:text-base md:text-lg lg:text-xl
                 sm:gap-30 md:gap-40 lg:gap-60">
                <a href="#"
                className="mt-2">
                    About Us
                </a>
                <a href="#"
                className="mt-2">
                    Products
                </a>
                <a href="#"
                className="mt-2">
                    Contact Us
                </a>
            </h1>
            <div className="flex justify-center gap-10
            sm:gap-15 md:gap-20 lg:gap-38">
                <h3 className="text-xs mt-1 ml-7
                sm:ml-4 sm:-mr-6 sm:text-sm
                 md:text-base lg:text-lg
                 ">
                    Lorem ipsum dolor <br /> sit amet consectetur, <br />
                    adipiscing elit, sed <br /> do eiusmod tempor <br />
                    incididunt ut labore <br /> et dolore.
                </h3>
                <h2 className="text-xs -ml-2 mt-1
                sm:ml-8 sm:text-sm md:text-base
                 lg:text-lg md:mr-5 md:ml-10">
                    <button className="cursor-pointer
                    hover:text-purple-600">
                        Cars
                    </button>
                    <br />
                    <button className="mt-1 cursor-pointer
                    hover:text-purple-600">
                        Bikes
                    </button>
                    <br />
                    <button className="mt-1 cursor-pointer
                    hover:text-purple-600">
                        Mobile Phones 
                    </button>
                    <br />
                    <button className="mt-1 cursor-pointer
                    hover:text-purple-600">
                        Furniture
                    </button>
                    <br />
                    <button className="mt-1 cursor-pointer
                    hover:text-purple-600">
                        Electronics
                    </button>
                </h2>
                <div className="mt-2
                md:-mr-6">
                    <div className="flex ml-3">
                        <img src={insta} 
                        className="w-8 h-4.5
                        sm:w-10 sm:h-5.5
                        md:w-12 md:h-6.5
                        lg:w-14 lg:h-7.5"/>  
                        <h3 className="text-xs
                        sm:text-sm md:text-base
                        lg:text-lg">
                            second_seller
                        </h3>                  
                    </div>
                    <div className="flex ml-5 mt-2
                    sm:ml-5.5 sm:mt-2.5
                    lg:ml-6.5">
                        <img src={facebook} 
                        className="w-4 h-4
                        sm:w-5 sm:h-5
                        md:w-6 md:h-6
                        lg:w-7 lg:h-7"/>  
                        <h3 className="text-xs ml-2
                        sm:text-sm md:text-base
                        lg:text-lg lg:ml-3">
                            Second Seller
                        </h3>                  
                    </div>
                    <div className="flex ml-4.5 mt-2
                    sm:ml-5 lg:ml-6">
                        <img src={yt} 
                        className="w-5
                        sm:w-6 md:w-7 lg:w-8"/>  
                        <h3 className="text-xs ml-1.5 
                        mt-0.5 sm:text-sm md:text-base
                        lg:text-lg lg:ml-2">
                            Second Seller India
                        </h3>                  
                    </div>
                    <div className="flex ml-5 mt-2
                    sm:ml-6 lg:ml-6.5 md:ml-5.5">
                        <img src={x} 
                        className="w-4
                        sm:w-5 md:w-6 lg:w-7"/>  
                        <h3 className="text-xs ml-1.5
                        sm:text-sm md:text-base
                        lg:text-lg">
                            @secondseller3690
                        </h3>                  
                    </div>
                </div>                
            </div>             
        </div>

        <div className="flex justify-center text-white
        text-sm mt-4 sm:text-base md:text-lg lg:text-xl
        lg:mt-10 md:mt-8 sm:mt-6">
            <h1>
                &copy;copyright developed by 
                <span className="text-purple-600 ml-1 mr-1">
                    Prime Technologies 
                </span>
                | All rights reserved
            </h1>
        </div>

    </div>
  )
}

export default Footer
