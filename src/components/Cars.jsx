import innova from "../assets/innova.jpg"
import location from "../assets/location.png"
import bmw from "../assets/bmw.jpg"
import Innova from "../descripiton/innova"
import { useState } from "react"
import Bmw from "../descripiton/bmw"

const Cars = (props) => {

  const [innovaPop, setInnovaPop] = useState(false) ;  
  const [bmwPop, setBmwPop] = useState(false) ;  

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
              <img src={innova} 
              className="w-45 rounded ml-3 mr-4
              mt-4 mb-4 sm:w-55
              md:w-60 md:ml-6 lg:w-80"/>   
              <h2 className="-ml-22 -mt-3 text-lg
              font-bold sm:-ml-28 sm:text-xl 
              md:-ml-30 md:text-2xl lg:-ml-44 lg:text-3xl">
                ₹ 8,00,000
              </h2>
              <h3 className="text-xs font-semibold 
              -ml-16 mt-1 sm:-ml-19 md:-ml-21 lg:-ml-37
              sm:text-sm md:text-base lg:text-lg">
                TOYOTA INNOVA G4
              </h3>
              <h3 className="text-xs font-semibold -ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg
              sm:-ml-21 md:-ml-24 lg:-ml-40">
                2015 - 2,50,000 km
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-3 h-4 ml-4 mt-3 mb-2
                sm:w-4 sm:h-5 md:ml-7 lg:w-5 lg:h-6"/>
                <h3 className="text-gray-500 text-xs mt-3 ml-1
                sm:text-sm md:text-base lg:text-lg lg:ml-2">
                  ERNAKULAM
                </h3>
                <button  onClick={() => setInnovaPop(!innovaPop)}
                className="ml-6 sm:ml-10 sm:mt-1 
                md:ml-14 md:mt-3 lg:ml-30">
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
                <img src={bmw} 
                className="w-45 rounded ml-3 mr-4
              mt-4 mb-4 sm:w-55
              md:w-60 md:ml-6 lg:w-80"/>   
                <h2 className="-ml-20 -mt-3 text-lg
              font-bold sm:-ml-24 sm:text-xl 
              md:-ml-26 md:text-2xl lg:-ml-40 lg:text-3xl">
                  ₹ 40,00,000
                </h2>
                <h3 className="text-xs font-semibold 
              -ml-30 mt-1 sm:-ml-34 md:-ml-39 lg:-ml-58
              sm:text-sm md:text-base lg:text-lg">
                  BMW 220i
                </h3>
                <h3 className="text-xs font-semibold -ml-20 mt-1
              sm:text-sm md:text-base lg:text-lg
              sm:-ml-23 md:-ml-26 lg:-ml-44">
                  2023 - 25,000 km
                </h3>
                <div className="flex">
                  <img src={location}
                  className="w-3 h-4 ml-4 mt-3 mb-2
                sm:w-4 sm:h-5 md:ml-7 lg:w-5 lg:h-6"/>
                  <h3 className="text-gray-500 text-xs mt-3 ml-1
                  sm:text-sm md:text-base lg:text-lg lg:ml-2">
                    KOZHIKODE
                  </h3>
                  <button onClick={() => setBmwPop(!bmwPop)} 
                  className="ml-8 sm:ml-12 sm:mt-1 
                  md:ml-16 md:mt-3 lg:ml-32">            
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
    
    {innovaPop && <Innova setInnovaPop={setInnovaPop}/>}
    {bmwPop && <Bmw setBmwPop={setBmwPop}/>}


    </>

  )
}

export default Cars
