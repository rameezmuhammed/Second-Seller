import bmw from "../assets/bmw.jpg"

const Bmw = (props) => {
  return (
    <div className="fixed inset-0 flex items-center
         justify-center bg-gray-50 bg-opacity-60 z-50
         overflow-hidden">      
          <button onClick={() => props?.setBmwPop(false)} 
          className="absolute top-4 right-4 
          text-black text-5xl -mt-1 cursor-pointer">
              &times;
          </button>
          <div className="flex justify-center bg-white">
            <div className="flex grid-cols-1 shadow-xl
            rounded-lg">
              <img src={bmw} 
              className="w-40 h-40 rounded mt-4 ml-4 mr-4
              sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 
              sm:mt-6 sm:ml-6 sm:mr-6 sm:mb-14
              md:mb-16 lg:mb-18"/>   
              <div>
                <h2 className="text-base mt-3 font-semibold mb-2
                sm:text-lg md:text-xl lg:text-2xl
                sm:mt-4 md:mt-5 lg:mt-6">
                  BMW 220i
                </h2>
                <h3 className="text-xs font-semibold pr-10 pb-4
                sm:text-sm md:text-base lg:text-lg">
                  OPTION : 220i <br />
                  MODEL : 2023 <br />
                  KM : 20,000 <br />
                  FUEL : PETROL <br />
                  COLOUR : BLACK <br />
                  CONDITION : EXCELLENT <br />
                  ACCIDENT : NO MAJOR ACCIDENT <br />
                  OWNERSHIP : SECOND OWNER <br />
                  REGISTRATION : KERALA
                </h3>
              </div>  
    
              <div>
                <h1 className="-ml-101 mt-46 text-xl font-bold
                sm:text-2xl md:text-3xl lg:text-4xl
                sm:-ml-130 sm:mt-68 md:-ml-158 md:mt-88
                lg:-ml-185 lg:mt-108">
                  ₹ 40,00,000
                </h1>            
              </div>     
              
            </div>
          </div>
        </div>
  )
}

export default Bmw
