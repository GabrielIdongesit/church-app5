import React from 'react';
import Week1 from'../assets/week3.jpg';
import Week2 from'../assets/event3.jpg';
import Week3 from'../assets/week1.jpg';


const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
        <div className="relative p-4">
          <div className='bg-black/60'>
            <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-center">MIDWEEK SERVICE</h3>
            <h4 className="absolute z-10 sm:mt-2 mt-3 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#051df3] text-xl font-bold text-center">Wednesday:5PM</h4>
          </div>
        <img className='h-full w-full bg-black/90 object-cover relative border-4 border-white shadow-xl' src={Week1} alt="" />
        </div>
        <div className="relative p-4">
            <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-[#057ffa]">FAITH CLINIC</h3>
            <h4 className="absolute z-10 sm:mt-2 mt-3 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#051df3] text-xl font-bold text-center">Thursday : 9AM</h4>
        <img className='h-full w-full bg-black/90 object-cover relative border-4 border-white shadow-xl' src={Week2} alt="" />
        </div>
        <div className="relative p-4">
            <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-center text-[#057ffa]">TRANSFORMATION SERVICE</h3>
            <h4 className="absolute z-10 sm:mt-2 mt-3 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#051df3] text-xl font-bold text-center">SUNDAY : 8AM</h4>
        <img className='h-full w-full bg-black/90 object-cover relative border-4 border-white shadow-xl' src={Week3} alt="" />
        </div>
    </div>
  )
}

export default Activities