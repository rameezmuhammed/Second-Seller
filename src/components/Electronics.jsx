import ac from "../assets/ac.jpg"
import location from "../assets/location.png"
import wash from "../assets/washing machine.jpg"
import Ac from "../descripiton/ac"
import { useState } from "react"
import Washing from "../descripiton/washing"
import fri from "../assets/fridge.jpg"
import Fridge from "../descripiton/Fridge"

const Electronics = (props) => {

  const [acPop, setAcPop] = useState(false) ;  
  const [washPop, setWashPop] = useState(false) ; 
  const [friPop, setFriPop] = useState(false) ; 

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
              <img src={ac} 
              className="w-35 rounded ml-1 mr-4
              mt-2 mb-1 sm:w-40 md:ml-3
              md:w-50 lg:w-70"/>   
              <h2 className=" text-lg -mt-35 ml-14
              font-bold sm:text-xl sm:ml-10 sm:-mt-40
              md:mt-2 md:-ml-26 md:text-2xl lg:-ml-40 lg:text-3xl">
                ₹40,000
              </h2>
              <h3 className="text-xs font-semibold  ml-24 mt-2
               md:-ml-13 lg:-ml-30 sm:ml-22
              sm:text-sm md:text-base lg:text-lg">
                AIR CONDITIONER 
              </h3>
              <h3 className="text-xs font-semibold ml-20 mt-1
              sm:text-sm md:text-base lg:text-lg sm:ml-17
               md:-ml-18 lg:-ml-36">
                2022 - HAVELLS
              </h3>
              <div className="mt-0">
                <img src={location}
                className="w-3 h-4 ml-39 mt-4 sm:ml-46
                sm:w-4 sm:h-5 md:ml-4 lg:w-5 lg:h-6"/>
                <h3 className="text-gray-500 text-xs -mt-4 ml-18
                sm:ml-16 sm:-mt-5 md:-ml-22 md:-mt-5.5
                sm:text-sm md:text-base lg:text-lg lg:-ml-38 lg:-mt-6">
                  KOLLAM
                </h3>
                <button  onClick={() => setAcPop(!acPop)}
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
              <img src={wash} 
              className="w-35 rounded ml-1 mr-4
              mt-2 mb-1 sm:w-40 md:ml-3
              md:w-50 lg:w-70"/>   
              <h2 className=" text-lg -mt-35 ml-14
              font-bold sm:text-xl sm:ml-10 sm:-mt-40
              md:mt-2 md:-ml-26 md:text-2xl lg:-ml-40 lg:text-3xl">
                ₹50,000
              </h2>
              <h3 className="text-xs font-semibold  ml-26 mt-2
               md:-ml-12 lg:-ml-24 sm:ml-26
              sm:text-sm md:text-base lg:text-lg">
                WASHING MACHINE 
              </h3>
              <h3 className="text-xs font-semibold ml-34 mt-1
              sm:text-sm md:text-base lg:text-lg sm:ml-34
               md:-ml-2 lg:-ml-14">
                2021 - FULLY AUTOMATIC
              </h3>
              <div className="mt-0">
                <img src={location}
                className="w-3 h-4 ml-39 mt-4 sm:ml-46
                sm:w-4 sm:h-5 md:ml-4 lg:w-5 lg:h-6"/>
                <h3 className="text-gray-500 text-xs -mt-4 ml-26
                sm:ml-26 sm:-mt-5 md:-ml-12 md:-mt-5.5
                sm:text-sm md:text-base lg:text-lg lg:-ml-28 lg:-mt-6">
                  TRIVANDRUM
                </h3>
                <button  onClick={() => setWashPop(!washPop)}
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
              <img src={fri} 
              className="w-35 rounded ml-1 mr-4
              mt-2 mb-1 sm:w-40 md:ml-3
              md:w-50 lg:w-70"/>   
              <h2 className=" text-lg -mt-35 ml-14
              font-bold sm:text-xl sm:ml-10 sm:-mt-40
              md:mt-2 md:-ml-26 md:text-2xl lg:-ml-40 lg:text-3xl">
                ₹70,000
              </h2>
              <h3 className="text-xs font-semibold  ml-19 mt-2
               md:-ml-20 lg:-ml-36 sm:ml-16
              sm:text-sm md:text-base lg:text-lg">
                 REFRIGERATOR
              </h3>
              <h3 className="text-xs font-semibold ml-28 mt-1
              sm:text-sm md:text-base lg:text-lg sm:ml-26
               md:-ml-8 lg:-ml-22">
                2018 - DOUBLE DOOR
              </h3>
              <div className="mt-0">
                <img src={location}
                className="w-3 h-4 ml-39 mt-4 sm:ml-46
                sm:w-4 sm:h-5 md:ml-4 lg:w-5 lg:h-6 lg:ml-6"/>
                <h3 className="text-gray-500 text-xs -mt-4 ml-20
                sm:ml-18 sm:-mt-5 md:-ml-22 md:-mt-5.5
                sm:text-sm md:text-base lg:text-lg lg:-ml-34 lg:-mt-6">
                  KANNUR
                </h3>
                <button  onClick={() => setFriPop(!friPop)}
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
    
    {acPop && <Ac setAcPop={setAcPop}/>}
    {washPop && <Washing setWashPop={setWashPop}/>}
    {friPop && <Fridge setFriPop={setFriPop}/>}

    </>
  )
}

export default Electronics