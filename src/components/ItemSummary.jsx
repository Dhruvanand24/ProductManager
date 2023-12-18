import React from 'react'

const ItemSummary = (props) => {
  return (
    <div className='p-3'>
      <div className="card card-side bg-base-100 shadow-xl m-4 p-2 dark:bg-white">
  <img className='aspect-video rounded-xl' src={props.imageurl} alt="Movie"/>
  <div className="card-body">
    <h2 className='font-bold text-xl'>{props.title}</h2>
    <p>{props.description}</p>
    <div className='flex'>
        <p className='font-bold text-[#483ae6]'>Price: <span className='font-medium text-black'>{props.price}</span></p>
        <p className='font-bold text-[#483ae6]'>Customer Name: <span className='font-medium text-black'>Rakesh Singh</span></p>
        <div className='border border-slate-400 p-1 rounded'><h2 className='font-bold'>12 Pieces</h2></div>
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
