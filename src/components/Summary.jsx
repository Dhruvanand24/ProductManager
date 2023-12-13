import React from 'react'

const Summary = () => {
  return (
    <div>
     <h1 className='font-bold'>Successfully Added Item</h1>   
    <div className="card card-side bg-base-100 shadow-xl m-4">
    
<figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
<div className="card-body">
  <h2 className="card-title">Length Counter with PNP/NPN Sensor Input | Make Multispan LC-10460</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam praesentium nostrum, quae assumenda possimus.</p>
  <div className='flex'>
      <p className='font-bold'>Price: <span className='font-medium'>12000</span></p>
      <p className='font-bold'>Product Id: <span className='font-medium'>122131</span></p>
      <p className='font-bold'>Category Name <span className='font-medium'>electric</span></p>
      <p className='font-bold'>Manufacturer Name: <span className='font-medium'>Rakesh Singh</span></p>
      <p className='font-bold'>Quantity: <span className='font-medium'>2</span></p>
      
      
  </div>
  <div className="card-actions justify-center mt-5">
  <button className="btn btn-primary mx-5">Print Bar Code</button>
    <button className="btn btn-primary mx-5">Save to device</button>
  </div>
</div>
</div>
  </div>
  )
}

export default Summary
