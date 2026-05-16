import React from 'react'

const HeroText = () => {
  return (
    <div>
        <h3 className='mb-6 text-6xl font-bold '>
          Prospective <br />

          <span className='mt-3  bg-gray-200 px-3 py-2 rounded-full inline-block'>
            Customer
          </span>

          {" "}Segmentation
        </h3>

        <p className='text-xl text-gray-700 font-thin leading-7'>
          Depending on customer satisfaction and access to banking products,
          potential target audience can be divided into three groups
        </p>
    </div>
  )
}

export default HeroText
