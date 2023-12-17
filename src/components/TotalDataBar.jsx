import React from 'react';

const TotalDataBar = () => {
  return (
    <div className='flex justify-between p-6 mt-5 flex-wrap bg-slate-300'>
       <div className='flex flex-col items-center justify-center m-4 bg-white p-6 rounded-lg cursor-pointer hover:bg-blue-100'>
      <h1 className='text-5xl font-bold mb-3 text-[#483ae6]'>112</h1>
      <h3 className='font-bold'>Total Orders</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 bg-white p-6 rounded-lg cursor-pointer hover:bg-blue-100'>
      <h1 className='text-5xl font-bold mb-3 text-[#e09068]'>152</h1>
      <h3 className='font-bold'>New Stocks</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 bg-white p-6 rounded-lg cursor-pointer hover:bg-blue-100'>
      <h1 className='text-5xl font-bold mb-3 text-[#80d4c8]'>100</h1>
      <h3 className='font-bold'>Dead Stocks</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 bg-white p-6 rounded-lg cursor-pointer hover:bg-blue-100'>
      <h1 className='text-5xl font-bold mb-3 text-[#3b2f2d]'>25</h1>
      <h3 className='font-bold'>Total Leads</h3>
    </div>
    <div className='flex flex-col items-center justify-center m-4 bg-white p-6 rounded-lg cursor-pointer hover:bg-blue-100'>
      <h1 className='text-3xl font-bold mb-3 text-[#717980]'>1,11,200</h1>
      <h3 className='font-bold'>Total Revenue</h3>
    </div>
      
      
    </div>
  );
};

export default TotalDataBar;
