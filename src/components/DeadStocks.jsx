import React from 'react'
import Product from './Product'


const DeadStocks = () => {
  return (
    <div>
      <div className='flex justify-between w-screen p-10'>
        <h1 className='text-2xl'>Dead Stocks</h1>
        <button className="btn btn-primary">View All</button>
      </div>
      <div className='px-10 ml-5'>
      <Product title="M18 Through Beam Sensor PNP-NO Type Sensing: 5m II Make: DOLPHIN" description="M18 Through Beam Sensor with IR(Infra-red) Lights helps in detection of any target that is opaque like Wood,Plastic,Rubber,Metal,Carbaord, etc." price="Rs. 550"/>
        <Product title="Slot Sensor EE-SX672WR Sn: 5mm Gap" description="Non-modulated Through-beam type, Grooved Type (Standard), Connector type, Sensing distance 5 mm, Dark-ON/Light-ON (selectable), PNP open collector output, Light indicator." price="Rs. 750"/>
        <Product title="TC-19 ( Fixed input, Single Display Temperature Controller) Manufactured by multispan" description="It appears that you’re referring to a temperature controller with the designation “TC-19.” TC-19 could be a specific model or product name used by a manufacturer for a temperature controller. However, without more specific information about the manufacturer or the features of this particular temperature controller, it’s challenging to provide detailed information." price="Rs. 1220"/>
      </div>
    </div>
  )
}

export default DeadStocks
