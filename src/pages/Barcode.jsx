import React from 'react';
import Summary from '../components/Summary';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Barcode = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const handleHome = () =>{
      navigate('/', {state:{from: location}})
  }

  return (
    <div className="text-center p-8 bg-slate-300 relative dark:text-black">
      <div>
        <h1 className='font-bold text-2xl'>Barcode</h1>
      </div>
      <div>
        <Summary data={productId} />
      </div>
      <button className='btn absolute bottom-4 right-4 bg-blue-900 text-white hover:text-black' onClick={handleHome}>Return To Home</button>
    </div>
  );
};

export default Barcode;
