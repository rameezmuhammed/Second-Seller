import passion from "../assets/passion pro.png"

const Passionpro = (props) => {
  return (
    <div className="fixed inset-0 flex items-center
          justify-center bg-gray-50 bg-opacity-60 z-50
          overflow-hidden">      
          <button onClick={() => props?.setPassionPop(false)} 
          className="absolute top-4 right-4 
          text-black text-5xl -mt-1 cursor-pointer">
              &times;
          </button>
          <div className="flex justify-center bg-white">
            <div className="flex grid-cols-1 shadow-xl
            rounded-lg">
              <img src={passion} 
              className="w-40 h-40 rounded mt-4 ml-4 mr-4
              sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 
              sm:mt-6 sm:ml-6 sm:mr-6 sm:mb-14
              md:mb-16 lg:mb-18"/>   
              <div>
                <h2 className="text-base mt-3 font-semibold mb-2
                sm:text-lg md:text-xl lg:text-2xl
                sm:mt-4 md:mt-5 lg:mt-6">
                  PASSION PRO
                </h2>
                <h3 className="text-xs font-semibold pr-10 pb-4
                sm:text-sm md:text-base lg:text-lg">
                  COMPANY : HERO <br />
                  MODEL : 2024 <br />
                  FUEL : PETROL <br />
                  KM : 16,000 <br />
                  COLOUR : BLACK <br />
                  CONDITION : EXCELLENT <br />
                  ACCIDENT : NO ACCIDENT <br />
                  OWNERSHIP : SINGLE OWNER <br />
                  REGISTRATION : KERALA
                </h3>
              </div>  
    
              <div>
                <h1 className="-ml-94 mt-46 text-xl font-bold
                sm:text-2xl md:text-3xl lg:text-4xl
                sm:-ml-120 sm:mt-68 md:-ml-146 md:mt-88
                lg:-ml-169 lg:mt-108">
                  ₹ 75,000
                </h1>            
              </div>     
              
            </div>
          </div>
        </div>
  )
}

export default Passionpro
