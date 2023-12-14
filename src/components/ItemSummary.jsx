import React from 'react'

const ItemSummary = (props) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl m-4">
  <figure><img className='h-20' src={props.imageurl} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className='flex'>
        <p className='font-bold'>Price: <span className='font-medium'>{props.price}</span></p>
        <p className='font-bold'>Customer Name: <span className='font-medium'>Rakesh Singh</span></p>
        <h2 className='font-bold'>12 Pieces</h2>
    </div>
    <div className="card-actions justify-center mt-5">
    <button className="btn btn-primary">Order Again</button>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemSummary
