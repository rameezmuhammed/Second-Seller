import unicorn from "../assets/unicorn.png"
import location from "../assets/location.png"
import passion from "../assets/passion pro.png"
import Unicorn from "../descripiton/unicorn"
import { useState } from "react"
import Passionpro from "../descripiton/Passionpro"

const Bikes = (props) => {

  const [uniPop, setUniPop] = useState(false) ;  
  const [passionPop, setPassionPop] = useState(false) ;  

  return (

    <>

    <div className="fixed inset-0 flex items-center
      justify-center bg-white bg-opacity-60 z-50
      ">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6
          md:grid-cols-2 text-center w-110
          sm:w-130 sm:gap-10 md:w-160 md:gap-14
          lg:w-200">
            <div className="border-2 border-gray-100
              rounded-lg shadow-lg sm:pb-2 md:pb-4">
              <img src={unicorn} 
              className="w-45 rounded ml-3 mr-4
              mt-4 mb-4 sm:w-55
              md:w-60 md:ml-6 lg:w-80"/>   
              <h2 className="-ml-23 -mt-3 text-lg
              font-bold sm:-ml-28 sm:text-xl 
              md:-ml-34 md:text-2xl lg:-ml-47 lg:text-3xl">
                ₹ 80,000
              </h2>
              <h3 className="text-xs font-semibold 
              -ml-16 mt-1 sm:-ml-19 md:-ml-24 lg:-ml-38
              sm:text-sm md:text-base lg:text-lg">
                HONDA UNICORN
              </h3>
              <h3 className="text-xs font-semibold -ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg
              sm:-ml-21 md:-ml-26 lg:-ml-41">
                2019 - 65,000 km
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-3 h-4 ml-5 mt-3 mb-2
                sm:w-4 sm:h-5 md:ml-7 lg:w-5 lg:h-6"/>
                <h3 className="text-gray-500 text-xs mt-3 ml-1
                sm:text-sm md:text-base lg:text-lg lg:ml-2">
                  THRISSUR
                </h3>
                <button  onClick={() => setUniPop(!uniPop)}
                className="ml-10 sm:ml-14 sm:mt-1 
                md:ml-22 md:mt-3 lg:ml-38">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>                
              </div>            
            </div>

            <div className="border-2 border-gray-100
                        rounded-lg shadow-lg sm:pb-2 md:pb-4">
                <img src={passion} 
                className="w-45 rounded ml-3 mr-4
              mt-4 mb-4 sm:w-55
              md:w-60 md:ml-6 lg:w-80"/>   
                <h2 className="-ml-24 -mt-3 text-lg
              font-bold sm:-ml-28 sm:text-xl 
              md:-ml-34 md:text-2xl lg:-ml-48 lg:text-3xl">
                  ₹ 75,000
                </h2>
                <h3 className="text-xs font-semibold 
              -ml-14 mt-1 sm:-ml-16 md:-ml-20 lg:-ml-36
              sm:text-sm md:text-base lg:text-lg">
                  HERO PASSION PRO
                </h3>
                <h3 className="text-xs font-semibold -ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg
              sm:-ml-20 md:-ml-26 lg:-ml-42">
                  2024 - 20,000 km
                </h3>
                <div className="flex">
                  <img src={location}
                  className="w-3 h-4 ml-5 mt-3 mb-2
                sm:w-4 sm:h-5 md:ml-7 lg:w-5 lg:h-6"/>
                  <h3 className="text-gray-500 text-xs mt-3 ml-1
                  sm:text-sm md:text-base lg:text-lg lg:ml-2">
                    KOTTAYAM
                  </h3>
                  <button onClick={() => setPassionPop(!passionPop)} 
                  className="ml-9 sm:ml-13 sm:mt-1 
                  md:ml-22 md:mt-3 lg:ml-36">            
                    <h3 className="text-sm font-semibold
                          text-white bg-purple-600 rounded-full
                        hover:bg-purple-900 cursor-pointer pl-4 pr-4
                        pt-1 pb-1">
                        More
                    </h3>                 
                  </button>
                </div>            
            </div>

          </div>
        </div>            
    </div>
    
    {uniPop && <Unicorn setUniPop={setUniPop}/>}
    {passionPop && <Passionpro setPassionPop={setPassionPop}/>}

    </>

  )
}

export default Bikes