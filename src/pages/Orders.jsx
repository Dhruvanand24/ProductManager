import React from 'react';
import ItemSummary from '../components/ItemSummary';

const Orders = () => {
  return (
    <div className="text-center p-8 bg-slate-300">
      <div>
        <h1 className='font-bold text-2xl'>Orders</h1>
      </div>
      <div>
        <ItemSummary imageurl= "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/5-6.webp?fit=600%2C600&ssl=1" title="M18 Through Beam Sensor PNP-NC PLUG-IN Type Sensing: 5m II Make: DOLPHIN" description= "M18 Through Beam Sensor with IR(Infra-red) Lights helps in detection of any target that is opaque like Wood,Plastic,Rubber,Metal,Carbaord, etc." price= "Rs. 550"/>
        <ItemSummary imageurl= "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/2-19.webp?fit=600%2C600&ssl=1" title="24VDC Relay OMRON MY2N-GS I 8 Pin Relay with Base" description= "DC relay is used to switch loads like Motor or used in Control wiring. It needs a control signal which is of 24VDC to trigger." price= "Rs. 350"/>
        <ItemSummary imageurl= "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/06/1-3.png?fit=600%2C600&ssl=1" title="CS1-F Magnetic Sensor for Pneumatic Cylinder 2 Wire II Make: AIRTAC" description= "CS1-F has Two wire and act as Switch. This is magnetic pneumatic sensor used for getting feedback of position of the Cylinder. Only detects Magnetic Target." price= "Rs. 450"/>
        <ItemSummary imageurl= "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-25.webp?fit=600%2C600&ssl=1" title="RPH meter with Proximity Sensor Input I Make: Multispan" description= "Rate Per Hour is a parameter used by machines where you need to understand your production per hour basis not on minute basis." price= "1,100"/>
        
      </div>
    </div>
  );
};

export default Orders;
