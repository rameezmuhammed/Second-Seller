import { useState } from "react"
import { Link } from "react-router-dom"
import Cars from "./Cars";
import Bikes from "./Bikes"
import MobilePhones from "./MobilePhones";
import Furnitures from "./Furnitures";
import Electronics from "./Electronics";

const Menubar = () => {    

  const [carsPop, setCarsPop] = useState();
  const [bikesPop, setBikesPop] = useState();
  const [mobilePhonesPop, setMobilePhonesPop] = useState();
  const [furnituresPop, setFurnituresPop] = useState();
  const [electronicsPop, setElectronicsPop] = useState();

  return (
    <>

    <div className="border border-gray-300 shadow-md rounded">
      <div className="flex justify-center gap-8
        font-semibold mt-25 mb-2 text-gray-600
        sm:gap-9 md:gap-10 lg:gap-12">

        <Link to="/cars"
         onClick={() => setCarsPop(!carsPop)}
        className="hover:text-purple-600">
            Cars
        </Link>
        <Link to="/bikes"
        onClick={() => setBikesPop(!bikesPop)}
        className="hover:text-purple-600">
            Bikes
        </Link>
        <Link to="/phones"
        onClick={() => setMobilePhonesPop(!mobilePhonesPop)}
        className="hover:text-purple-600">
            Mobile Phones
        </Link>
        <Link to="/furnitures"
        onClick={() => setFurnituresPop(!furnituresPop)}
        className="hover:text-purple-600">
            Furnitures
        </Link>
        <Link to="/electronics"
        onClick={() => setElectronicsPop(!electronicsPop)}
        className="hover:text-purple-600">
            Electronics
        </Link>
      </div>
    </div> 

    {carsPop && <Cars setCarsPop={setCarsPop}/>}   
    {bikesPop && <Bikes setBikesPop={setBikesPop}/>}   
    {mobilePhonesPop && <MobilePhones setMobilePhonesPop={setMobilePhonesPop}/>}   
    {furnituresPop && <Furnitures setFurnituresPop={setFurnituresPop}/>}   
    {electronicsPop && <Electronics setElectronicsPop={setElectronicsPop}/>}   

    </>
  )
}

export default Menubar
