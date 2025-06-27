import innova from "../assets/innova.jpg"
import iphone from "../assets/iphone.jpg"
import unicorn from "../assets/unicorn.png"
import washingmachine from "../assets/washing machine.jpg"
import bmw from "../assets/bmw.jpg"
import ac from "../assets/ac.jpg"
import sofa5 from "../assets/sofa 5 seater.jpg"
import sofa4 from "../assets/4 seater sofa.webp"
import diningtable from "../assets/dining table.jpg"
import fridge from "../assets/fridge.jpg"
import samsung from "../assets/samsung.jpg"
import passionpro from "../assets/passion pro.png"
import location from "../assets/location.png"
import { useState } from "react"
import Innova from "../descripiton/innova"
import Iphone from "../descripiton/iphone"
import Unicorn from "../descripiton/unicorn"
import Washing from "../descripiton/washing"
import Bmw from "../descripiton/bmw"
import Ac from "../descripiton/ac"
import Sofa5 from "../descripiton/sofa5"
import Dining from "../descripiton/Dining"
import Fridge from "../descripiton/Fridge"
import Samsung from "../descripiton/Samsung"
import Passionpro from "../descripiton/Passionpro"
import Sofa4 from "../descripiton/sofa4"

const Home = (props) => {

    const [innovaPop, setInnovaPop] = useState(false) 
    const [bmwPop, setBmwPop] = useState(false) 
    const [passionPop, setPassionPop] = useState(false) 
    const [uniPop, setUniPop] = useState(false) 
    const [washPop, setWashPop] = useState(false) 
    const [acPop, setAcPop] = useState(false) 
    const [friPop, setFriPop] = useState(false) 
    const [dinePop, setDinePop] = useState(false) 
    const [iphonePop, setIphonePop] = useState(false) 
    const [samsungPop, setSamsungPop] = useState(false) 
    const [sofa5Pop, setSofa5Pop] = useState(false) 
    const [sofa4Pop, setSofa4Pop] = useState(false) 
  

  return(

    <>

    <div>
      <div className="flex justify-center mt-8 mb-8">
        <div className="grid grid-cols-1
          md:grid-cols-2 lg:grid-cols-3 text-center gap-12
          ">
          <div className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={innova} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-38 -mt-3 text-lg
              font-bold">
                ₹ 8,00,000
              </h2>
              <h3 className="text-xs font-semibold -ml-32 mt-1">
                TOYOTA INNOVA G4
              </h3>
              <h3 className="text-xs font-semibold -ml-34 mt-1">
                2015 - 2,50,000 km
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  ERNAKULAM, KERALA
                </h3>
                <button  onClick={() => setInnovaPop(!innovaPop)}
                className="ml-12">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>                
              </div>            
          </div>

          <div
           className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={iphone} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 45,000
              </h2>
              <h3 className="text-xs font-semibold -ml-31 mt-1 mb-5">
                IPHONE 12 PRO MAX
              </h3>            
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  MALAPPURAM, KERALA
                </h3>
                <button  onClick={() => setIphonePop(!iphonePop)}
                className="ml-10">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div
           className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={unicorn} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 80,000
              </h2>
              <h3 className="text-xs font-semibold -ml-35 mt-1">
                HONDA UNICORN
              </h3>
              <h3 className="text-xs font-semibold -ml-37 mt-1">
                2019 - 65,000 km
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  THRISSUR, KERALA
                </h3>
                <button onClick={() => setUniPop(!uniPop)} 
                className="ml-17">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div          
           className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={washingmachine} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 50,000
              </h2>
              <h3 className="text-xs font-semibold -ml-31 mt-1">
                WASHING MACHINE
              </h3>
              <h3 className="text-xs font-semibold -ml-24 mt-1">
                2021 - FULLY AUTOMATIC
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  TRIVANDRUM, KERALA
                </h3>
                <button onClick={() => setWashPop(!washPop)} 
                className="ml-11">
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
            rounded-lg shadow-lg">
              <img src={bmw} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-36 -mt-3 text-lg
              font-bold">
                ₹ 40,00,000
              </h2>
              <h3 className="text-xs font-semibold -ml-46 mt-1">
                BMW 220i
              </h3>
              <h3 className="text-xs font-semibold -ml-36 mt-1">
                2023 - 25,000 km
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  KOZHIKODE, KERALA
                </h3>
                <button onClick={() => setBmwPop(!bmwPop)} 
                className="ml-14">
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
            rounded-lg shadow-lg">
              <img src={ac} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 40,000
              </h2>
              <h3 className="text-xs font-semibold -ml-22 mt-1">
                HAVELLS AIR CONDITIONER
              </h3>
              <h3 className="text-xs font-semibold -ml-34 mt-1">
                2022 - AUTOMATIC
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  KOLLAM, KERALA
                </h3>
                <button  onClick={() => setAcPop(!acPop)}
                 className="ml-20">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div  
          className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={sofa5} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 55,000
              </h2>
              <h3 className="text-xs font-semibold -ml-24 mt-1">
                5 SEATER PREMIUM SOFA
              </h3>
              <h3 className="text-xs font-semibold -ml-40 mt-1">
                2022 - CREAM
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  PALAKKAD, KERALA
                </h3>
                <button onClick={() => setSofa5Pop(!sofa5Pop)}
                className="ml-16">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div  
          className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={diningtable} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 45,000
              </h2>
              <h3 className="text-xs font-semibold -ml-12 mt-1">
                8 SEATER PREMIUM DINING TABLE
              </h3>
              <h3 className="text-xs font-semibold -ml-32.5 mt-1">
                2020 - TEAK WOOD
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  KASARAGOD, KERALA
                </h3>
                <button onClick={() => setDinePop(!dinePop)}
                 className="ml-13">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div 
          className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={fridge} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 70,000
              </h2>
              <h3 className="text-xs font-semibold -ml-39 mt-1">
                REFRIGERATOR
              </h3>
              <h3 className="text-xs font-semibold -ml-30 mt-1">
                2018 - DOUBLE DOOR
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  KANNUR, KERALA
                </h3>
                <button onClick={() => setFriPop(!friPop)}
                 className="ml-19">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div 
          className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={samsung} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 80,000
              </h2>
              <h3 className="text-xs font-semibold -ml-30 mt-1 mb-5">
                SAMSUNG S23 ULTRA
              </h3>            
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  IDUKKI, KERALA
                </h3>
                <button  onClick={() => setSamsungPop(!samsungPop)}
                className="ml-22">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div
          className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={passionpro} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 75,000
              </h2>
              <h3 className="text-xs font-semibold -ml-32 mt-1">
                HERO PASSION PRO
              </h3>
              <h3 className="text-xs font-semibold -ml-36 mt-1">
                2024 - 20,000 km
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  KOTTAYAM, KERALA
                </h3>
                <button   onClick={() => setPassionPop(!passionPop)}
                className="ml-16">
                  <h3 className="text-sm font-semibold
                    text-white bg-purple-600 rounded-full
                    hover:bg-purple-900 cursor-pointer pl-4 pr-4
                    pt-1 pb-1">
                    More
                  </h3>                 
                </button>
              </div>            
          </div>

          <div 
          className="border-2 border-gray-100
            rounded-lg shadow-lg">
              <img src={sofa4} 
              className="w-60 rounded ml-4 mr-4
              mt-4 mb-4"/>   
              <h2 className="-ml-42 -mt-3 text-lg
              font-bold">
                ₹ 50,000
              </h2>
              <h3 className="text-xs font-semibold -ml-24 mt-1">
                4 SEATER PREMIUM SOFA
              </h3>
              <h3 className="text-xs font-semibold -ml-40 mt-1">
                2018 - PURPLE
              </h3>
              <div className="flex">
                <img src={location} 
                className="w-2.5 ml-4 mt-3 mb-2"/>
                <h3 className="text-gray-500 text-sm mt-2 ml-2">
                  PATHANAMTHITTA, KERALA
                </h3>
                <button  onClick={() => setSofa4Pop(!sofa4Pop)}
                className="ml-3">
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
      <div className="flex justify-center mt-10 mb-10">
          <button className=" font-semibold
            text-white bg-purple-600 rounded-full
            hover:bg-red-600 cursor-pointer pl-4 pr-4
            pt-2 pb-2 text-sm">
            View More
          </button>
      </div>
    </div>

    {innovaPop && <Innova setInnovaPop={setInnovaPop}/>}
    {bmwPop && <Bmw setBmwPop={setBmwPop}/>}
    {passionPop && <Passionpro setPassionPop={setPassionPop}/>}
    {uniPop && <Unicorn setUniPop={setUniPop}/>}
    {washPop && <Washing setWashPop={setWashPop}/>}
    {acPop && <Ac setAcPop={setAcPop}/>}
    {friPop && <Fridge setFriPop={setFriPop}/>}
    {dinePop && <Dining setDinePop={setDinePop}/>}
    {iphonePop && <Iphone setIphonePop={setIphonePop}/>}
    {samsungPop && <Samsung setSamsungPop={setSamsungPop}/>}
    {sofa5Pop && <Sofa5 setSofa5Pop={setSofa5Pop}/>}
    {sofa4Pop && <Sofa4 setSofa4Pop={setSofa4Pop}/>}

    </>
    
  )
}

export default Home
