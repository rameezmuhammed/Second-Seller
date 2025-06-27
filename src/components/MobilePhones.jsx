import iphone from "../assets/iphone.jpg"
import location from "../assets/location.png"
import samsung from "../assets/samsung.jpg"
import Iphone from "../descripiton/iphone"
import { useState } from "react"
import Samsung from "../descripiton/Samsung"

const MobilePhones = (props) => {

  const [iphonePop, setIphonePop] = useState(false) ;  
  const [samsungPop, setSamsungPop] = useState(false) ; 

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
              <img src={iphone} 
              className="w-45 rounded ml-3 mr-4
              mt-4 mb-4 sm:w-55
              md:w-60 md:ml-6 lg:w-80"/>   
              <h2 className="-ml-23 -mt-3 text-lg
              font-bold sm:-ml-30 sm:text-xl 
              md:-ml-34 md:text-2xl lg:-ml-47 lg:text-3xl">
                ₹ 45,000
              </h2>
              <h3 className="text-xs font-semibold 
              -ml-12 mt-1 sm:-ml-16 md:-ml-20 lg:-ml-34
              sm:text-sm md:text-base lg:text-lg">
                IPHONE 12 PRO MAX 
              </h3>
              {/* <h3 className="text-xs font-semibold -ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg
              sm:-ml-21 md:-ml-26 lg:-ml-41">
                2019 - 65,000 km
              </h3> */}
              <div className="flex">
                <img src={location} 
                className="w-3 h-4 ml-5 mt-3 mb-2
                sm:w-4 sm:h-5 md:ml-7 lg:w-5 lg:h-6"/>
                <h3 className="text-gray-500 text-xs mt-3 ml-1
                sm:text-sm md:text-base lg:text-lg lg:ml-2">
                  MALAPPURAM
                </h3>
                <button  onClick={() => setIphonePop(!iphonePop)}
                className="ml-4 sm:ml-7 sm:mt-1 
                md:ml-14 md:mt-3 lg:ml-28">
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
                <img src={samsung} 
                className="w-45 rounded ml-3 mr-4
              mt-4 mb-4 sm:w-55
              md:w-60 md:ml-6 lg:w-80"/>   
                <h2 className="-ml-22 -mt-3 text-lg
              font-bold sm:-ml-28 sm:text-xl 
              md:-ml-34 md:text-2xl lg:-ml-48 lg:text-3xl">
                  ₹ 80,000
                </h2>
                <h3 className="text-xs font-semibold 
              -ml-10 mt-1 sm:-ml-13 md:-ml-18 lg:-ml-32
              sm:text-sm md:text-base lg:text-lg">
                  SAMSUNG S23 ULTRA
                </h3>
                {/* <h3 className="text-xs font-semibold -ml-18 mt-1
              sm:text-sm md:text-base lg:text-lg
              sm:-ml-20 md:-ml-26 lg:-ml-42">
                  2024 - 20,000 km
                </h3> */}
                <div className="flex">
                  <img src={location}
                  className="w-3 h-4 ml-5 mt-3 mb-2
                sm:w-4 sm:h-5 md:ml-7 lg:w-5 lg:h-6"/>
                  <h3 className="text-gray-500 text-xs mt-3 ml-1
                  sm:text-sm md:text-base lg:text-lg lg:ml-2">
                    IDUKKI
                  </h3>
                  <button onClick={() => setSamsungPop(!samsungPop)} 
                  className="ml-14 sm:ml-20 sm:mt-1 
                  md:ml-28 md:mt-3 lg:ml-44">            
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
    
    {iphonePop && <Iphone setIphonePop={setIphonePop}/>}
    {samsungPop && <Samsung setSamsungPop={setSamsungPop}/>}

    </>
  )
}

export default MobilePhones
