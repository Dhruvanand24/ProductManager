import React from 'react'

const Product = (props) => {
  return (
    <div className='flex flex-col m-5 border-l-4 border-[#483ae6] pl-3'>
        <h1 className='font-bold'>{props.title}</h1>
        <p className='font-semibold'>{props.description}</p>
        <div className='flex'>
            <h3 className='mr-3'>Quantity:</h3>
            <p className='text-[#483ae6] font-bold'>120</p>
            <h3 className='ml-1'>Pieces </h3>
        </div>
        <div className='flex'>
            <h3 className='mr-3'>Price: </h3>
            <p className='text-[#483ae6] font-bold'>{props.price}</p>
        </div>
      
    </div>
  )
}

export default Product
