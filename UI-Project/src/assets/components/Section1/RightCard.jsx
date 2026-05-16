import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCard = ({ number, img, intro, tag, color }) => {
  return (

    <div className='h-full shrink-0 overflow-hidden relative w-76 rounded-4xl'>

      <img
        className='h-full w-full object-cover'
        src={img}
        alt=""
      />

      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>

        <h2 className='bg-white rounded-full h-10 w-10 text-2xl flex justify-center items-center'>
          {number}
        </h2>

        <div>

          {intro}

          <div className={`h-13 flex items-center justify-between text-white px-4 py-3 rounded-full w-[260px] ${color}`}>

            <span className="font-thin text-2xl">
              {tag}
            </span>

            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowRight size={28} />
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default RightCard