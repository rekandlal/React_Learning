import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full p-2 w-2/3 overflow-x-auto mb-20 flex flex-nowrap gap-10'>
        {props.users?.map((elem, index) => (
            <RightCard
                key={index}
                number={elem.number}
                img={elem.img}
                intro={elem.intro}
                tag={elem.tag}
                color={elem.color}
            />
        ))}


    </div>
  )
}

export default RightContent
