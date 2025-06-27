import sofa4 from "../assets/4 seater sofa.webp"
import location from "../assets/location.png"
import sofa5 from "../assets/sofa 5 seater.jpg"
import Sofa4 from "../descripiton/sofa4"
import { useState } from "react"
import Sofa5 from "../descripiton/sofa5"
import dine from "../assets/dining table.jpg"
import Dining from "../descripiton/Dining"

const Furnitures = (props) => {

  const [sofa4Pop, setSofa4Pop] = useState(false) ;  
  const [sofa5Pop, setSofa5Pop] = useState(false) ; 
  const [dinePop, setDinePop] = useState(false) ; 

  return (
    <>

    <div className="fixed inset-0 flex items-center
      justify-center bg-white bg-opacity-60 z-50
      ">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4
            md:grid-cols-3 text-center w-80
            sm:w-100 md:w-180
            lg:w-240">
            <div className="border-2 border-gray-100
              rounded-lg shadow-lg 
              sm:pb-2 md:pb-4">
              <img src={sofa4} 
              className="w-35 rounded ml-1 mr-4
              mt-2 mb-1 sm:w-40 md:ml-3
              md:w-50 lg:w-70"/>   
              <h2 className=" text-lg -mt-35 ml-14
              font-bold sm:text-xl sm:ml-10 sm:-mt-40
              md:mt-2 md:-ml-26 md:text-2xl lg:-ml-40 lg:text-3xl">
                ₹50,000
              </h2>
              <h3 className="text-xs font-semibold  ml-19 mt-2
               md:-ml-20 lg:-ml-36 sm:ml-16
              sm:text-sm md:text-base lg:text-lg">
                4 SEATER SOFA 
              </h3>
              <h3 className="text-xs font-semibold ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg sm:ml-15
               md:-ml-22 lg:-ml-38">
                2018 - PURPLE
              </h3>
              <div className="mt-0">
                <img src={location}
                className="w-3 h-4 ml-39 mt-4 sm:ml-46
                sm:w-4 sm:h-5 md:ml-4 lg:w-5 lg:h-6"/>
                <h3 className="text-gray-500 text-xs -mt-4 ml-32
                sm:ml-32 sm:-mt-5 md:-ml-4 md:-mt-5.5
                sm:text-sm md:text-base lg:text-lg lg:-ml-16 lg:-mt-6">
                  PATHANAMTHITTA
                </h3>
                <button  onClick={() => setSofa4Pop(!sofa4Pop)}
                className=" mt-2 ml-60 mb-1 sm:ml-80
                md:ml-34 md:mt-4 md:-mb-8 lg:ml-54">
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
              rounded-lg shadow-lg 
              sm:pb-2 md:pb-4">
              <img src={sofa5} 
              className="w-35 rounded ml-1 mr-4
              mt-2 mb-1 sm:w-40 md:ml-3
              md:w-50 lg:w-70"/>   
              <h2 className=" text-lg -mt-35 ml-14
              font-bold sm:text-xl sm:ml-10 sm:-mt-40
              md:mt-2 md:-ml-26 md:text-2xl lg:-ml-40 lg:text-3xl">
                ₹55,000
              </h2>
              <h3 className="text-xs font-semibold  ml-19 mt-2
               md:-ml-20 lg:-ml-36 sm:ml-16
              sm:text-sm md:text-base lg:text-lg">
                5 SEATER SOFA 
              </h3>
              <h3 className="text-xs font-semibold ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg sm:ml-15
               md:-ml-22 lg:-ml-38">
                2022 - CREAM
              </h3>
              <div className="mt-0">
                <img src={location}
                className="w-3 h-4 ml-39 mt-4 sm:ml-46
                sm:w-4 sm:h-5 md:ml-4 lg:w-5 lg:h-6"/>
                <h3 className="text-gray-500 text-xs -mt-4 ml-32
                sm:ml-32 sm:-mt-5 md:-ml-18 md:-mt-5.5
                sm:text-sm md:text-base lg:text-lg lg:-ml-32 lg:-mt-6">
                  PALAKKAD
                </h3>
                <button  onClick={() => setSofa5Pop(!sofa5Pop)}
                className=" mt-2 ml-60 mb-1 sm:ml-80
                md:ml-34 md:mt-4 md:-mb-8 lg:ml-54">
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
              rounded-lg shadow-lg 
              sm:pb-2 md:pb-4">
              <img src={dine} 
              className="w-35 rounded ml-1 mr-4
              mt-2 mb-1 sm:w-40 md:ml-3
              md:w-50 lg:w-70"/>   
              <h2 className=" text-lg -mt-35 ml-14
              font-bold sm:text-xl sm:ml-10 sm:-mt-40
              md:mt-2 md:-ml-26 md:text-2xl lg:-ml-40 lg:text-3xl">
                ₹45,000
              </h2>
              <h3 className="text-xs font-semibold  ml-19 mt-2
               md:-ml-20 lg:-ml-36 sm:ml-16
              sm:text-sm md:text-base lg:text-lg">
                 DINING TABLE
              </h3>
              <h3 className="text-xs font-semibold ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg sm:ml-15
               md:-ml-16 lg:-ml-32">
                2020 - 8 SEATER
              </h3>
              <div className="mt-0">
                <img src={location}
                className="w-3 h-4 ml-39 mt-4 sm:ml-46
                sm:w-4 sm:h-5 md:ml-4 lg:w-5 lg:h-6 lg:ml-6"/>
                <h3 className="text-gray-500 text-xs -mt-4 ml-32
                sm:ml-32 sm:-mt-5 md:-ml-14 md:-mt-5.5
                sm:text-sm md:text-base lg:text-lg lg:-ml-25 lg:-mt-6">
                  KASARAGOD
                </h3>
                <button  onClick={() => setDinePop(!dinePop)}
                className=" mt-2 ml-60 mb-1 sm:ml-80
                md:ml-34 md:mt-4 md:-mb-8 lg:ml-54">
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
    
    {sofa4Pop && <Sofa4 setSofa4Pop={setSofa4Pop}/>}
    {sofa5Pop && <Sofa5 setSofa5Pop={setSofa5Pop}/>}
    {dinePop && <Dining setDinePop={setDinePop}/>}

    </>
  )
}

export default Furnitures
