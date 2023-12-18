import React from 'react'
import Product from './Product'


const DeadStocks = () => {
  return (
    <div className='m-4 bg-white rounded-xl dark: text-black'>
      <div className='flex justify-between p-10'>
        <div>
        <h1 className='text-2xl font-bold'>Total Dead Stocks</h1>
        <h3 className='font-semibold'>A summary of your dead stocks</h3>
        </div>
        <button className="btn bg-blue-900 text-white hover:text-black" >View All</button>
      </div>
      <div className='ml-3'>
      <Product title="M18 Through Beam Sensor PNP-NO Type Sensing: 5m II Make: DOLPHIN" description="M18 Through Beam Sensor with IR(Infra-red) Lights helps in detection of any target that is opaque like Wood,Plastic,Rubber,Metal,Carbaord, etc." price="Rs. 550"/>
        <Product title="Slot Sensor EE-SX672WR Sn: 5mm Gap" description="Non-modulated Through-beam type, Grooved Type (Standard), Connector type, Sensing distance 5 mm, Dark-ON/Light-ON (selectable), PNP open collector output, Light indicator." price="Rs. 750"/>
        <Product title="TC-19 ( Fixed input, Single Display Temperature Controller) Manufactured by multispan" description="It appears that you’re referring to a temperature controller with the designation “TC-19.” TC-19 could be a specific model or product name used by a manufacturer for a temperature controller. However, without more specific information about the manufacturer or the features of this particular temperature controller, it’s challenging to provide detailed information." price="Rs. 1220"/>
      </div>
    </div>
  )
}

export default DeadStocks
