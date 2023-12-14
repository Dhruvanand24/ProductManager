import React from 'react'

const Product = (props) => {
  return (
    <div className='flex flex-col m-5 border-l border-gray-500 pl-3'>
        <h1 className='font-bold'>{props.title}</h1>
        <p>{props.description}</p>
        <div className='flex'>
            <h3 className='mr-3'>Quntity: </h3>
            <p>1</p>
        </div>
        <div className='flex'>
            <h3 className='mr-3'>Price: </h3>
            <p>{props.price}</p>
        </div>
      
    </div>
  )
}

export default Product
