'use client'
import Navbar from "./Components/Navbar"
import roblox from '../public/roblox.jpg'
import OP from '../public/OP.png'

const Home = ()=>{
   return(
    <>
        <div className="w-[100%] h-auto text-slate-100">
            
           <Navbar/>

           <HeroSec/>

           <OfferSec/>

           <CardComp/>

           <GameComp/>

        </div>
    </>
   )
}

// const HeroSec = () => {
//   return (
//     <div
//       className="w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${roblox.src})` }}
//     >
//       {/* Transparent black overlay */}
//       <div className="w-full h-full bg-black bg-opacity-75">
//         <div className="text-white text-center p-10">
           
//         </div>
//       </div>
//     </div>
//   );
// };

const HeroSec = ()=>{
  return(
    <>
        <div className=" w-[100%] h-[500px] flex items-center bg-slate-800"
        // style={{ backgroundImage: `url(${roblox.src})` }}
        >
          <div className="w-[50%] flex flex-col items-center">
             <p  className="w-[70%] font-bold text-teal-500 font-mono text-[30px]">GAMERSBERG</p>
             <p className="w-[70%] text-[55px] font-bold">Where Gamers
              Trade to Win.</p>
              <p className="w-[70%]" >Trade Real Time & Earn Rewards Instantly! </p>
              <div className="w-[70%] md:mt-5 flex  justify-between items-center">
                <button className="w-[150px] rounded-sm h-[40px] bg-teal-500 transition-all hover:scale-110 text-slate-900 text-[20px] font-semibold">Log-In</button>
              </div>
          </div>

          <div className="w-[50%] flex justify-center">
            <img className="w-[350px] h-[350px] rounded-md hover:rotate-3 cursor-pointer transition-all duration-300 ease-in-out" src="https://america.aarquiteta.com.br/wp-content/uploads/2024/06/roblox-avatar-ideas01.jpg.webp" alt="" />
          </div>
     </div>
        {/* </div> */}
    </>
  )
}

const OfferSec = ()=>{
  return(
    <>
         <div className=" w-[100%] h-[400px] flex items-center justify-evenly bg-slate-800 flex-col" style={{fontFamily:'monospace'}}>
            
            <p className="text-teal-500 text-[40px] text-center w-[80%] font-bold">Faster, Hassle-Free Trading</p>

            <p className="w-[60%] text-center text-[18px] text-slate-400">With our platform, managing your listed items has never been easier. You can receive instant offers directly from potential buyers, streamlining the entire selling process. Instead of waiting days for a response, you get real-time notifications as soon as someone makes an offer. This gives you the power to make decisions swiftly, allowing you to either accept.</p>

            <p className="w-[80%] text-center">Accept or decline with ease – the control is yours for smooth and efficient trade.</p>

        </div>
    </>
  )
}

const CardComp = ()=>{
  return(
    <>
        <div className="w-[100%] h-[500px] bg-slate-800 flex flex-col justify-evenly"
        style={{fontFamily:'monospace'}}>
          <p className="w-[100%] text-[40px] font-bold text-teal-500 text-center">Why Choose Us?</p>
        <div className="flex w-[100%] justify-evenly">
           <div className=" w-[250px] h-[300px] bg-slate-700 shadow-lg flex justify-evenly items-center flex-col animate-pulse hover:animate-none">
              <p>Rewards with 100% Transparency</p>
                <p>We reward you for each trade you complete on our platform. You will receive our currency, 'Gemz', which you may swap for in-game things. We send Proofs to all of the winners we reward on Discord.</p>
           </div>

           <div className=" w-[250px] h-[300px] bg-slate-700 shadow-lg flex justify-evenly items-center flex-col animate-pulse hover:animate-none">
              <p>Rewards with 100% Transparency</p>
                <p>We reward you for each trade you complete on our platform. You will receive our currency, 'Gemz', which you may swap for in-game things. We send Proofs to all of the winners we reward on Discord.</p>
           </div>

           <div className=" w-[250px] h-[300px] bg-slate-700 shadow-lg flex justify-evenly items-center flex-col animate-pulse hover:animate-none">
              <p>Rewards with 100% Transparency</p>
                <p>We reward you for each trade you complete on our platform. You will receive our currency, 'Gemz', which you may swap for in-game things. We send Proofs to all of the winners we reward on Discord.</p>
           </div>

           <div className=" w-[250px] h-[300px] bg-slate-700 shadow-lg flex justify-evenly items-center flex-col animate-pulse hover:animate-none">
              <p>Rewards with 100% Transparency</p>
                <p>We reward you for each trade you complete on our platform. You will receive our currency, 'Gemz', which you may swap for in-game things. We send Proofs to all of the winners we reward on Discord.</p>
           </div>

        </div>

    

        </div>
    </>
  )
}

const GameComp = ()=>{
  return(
    <>
         <div className="w-[100%] flex justify-center items-center  h-[550px] bg-slate-800">
              <div className="w-[90%] h-[480px] justify-evenly shadow-2xl rounded-lg flex flex-col items-center">
                     <p className="text-teal-500 text-[33px] font-semibold">Compatible Games</p>
                     <p>We Only Have Limited Games Titles Right Now But We Believe in quality over quantity</p>

                     <div className="w-[80%] h-[300px] flex items-center justify-evenly">

                     <div className="w-[350px] h-[300px] cursor-pointer flex flex-col items-center justify-evenly rounded-md  hover:bg-slate-700 transition-all duration-500 ease-in-out">
                          <img src="https://www.gamersberg.com/assets/Blox_Fruits_Gamersberg.png" className="w-[300px] h-[150px]" alt="" />
                           <div className="flex flex-col w-[90%] justify-evenly items-center">
                            <p>Blox Fruits</p>
                            <p>Pirate advanture with special abilities from mysterious fruits</p>
                           </div>
                       </div>


                       <div className="w-[350px] h-[300px] cursor-pointer flex flex-col items-center justify-evenly rounded-md  hover:bg-slate-700 transition-all duration-500 ease-in-out">
                          <img src="https://www.gamersberg.com/assets/Blox_Fruits_Gamersberg.png" className="w-[300px] h-[150px]" alt="" />
                           <div className="flex flex-col w-[90%] justify-evenly items-center">
                            <p>Blox Fruits</p>
                            <p>Pirate advanture with special abilities from mysterious fruits</p>
                           </div>
                       </div>
                     </div>
              </div>
         </div>
    </>
  )
}

const Faq = ()=>{
  return(
    <>
    
    </>
  )
}


export default Home