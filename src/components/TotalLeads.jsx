import React from 'react'
import Product from './Product'
import Leads from './Leads'

const TotalLeads = () => {
  return (
    <div className='m-4 bg-white rounded-xl dark: text-black'>
      <div className='flex justify-between p-10'>
        <div>
        <h1 className='text-2xl font-bold'>Total Leads</h1>
        <h3 className='font-semibold'>A summary of your leads recieved</h3>
        </div>
        <button className="btn bg-blue-900 text-white hover:text-black" >View All</button>
      </div>
      <div className='ml-3'>
      <Leads title="Rakesh Verma" description="I need some of this product." price="Rs. 550" contact="123456789"/>
        <Leads title="Rohit Sharma" description="Do you have this available in my city?" price="Rs. 1220" contact="123456789"/>
      </div>
    </div>
  )
}

export default TotalLeads
