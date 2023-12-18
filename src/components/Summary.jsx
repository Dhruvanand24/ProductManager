
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import React, { useEffect, useRef, useState } from 'react';
import Barcode from 'react-barcode';
import axios from 'axios';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Summary = (props) => {
  const showPending = () => {
    const notify = () => toast.info("Sent Request to upload");
  }
  const showSuccess = () => {
    const notify = () => toast.success("Added Successfully, checkout store through qr code on navbar")
  }
  const showError = () => {
    const notify = () => toast.error("Some Error Occured!!, Please try again.")
  }
  
  const barcodeRef = useRef(null);
  const [loading, setLoading] = useState(false);
 
  const [productData, setProductData] = useState(null);
  const convertToShopifyFormat = () => {
    const convertedData = {
      title: productData.Name,
      body_html: `<p>${productData.Description}</p>`,
      vendor: productData.manufacturer,
      product_type: productData.Category,
      variants: [
        {
          option1: "Default Title",
          price: productData.Price.toFixed(2), // Format price to two decimal places
          sku: "123456789",
          inventory_management: "shopify",
          inventory_quantity: productData.Quantity,
        }
      ],
      images: [
        {
          src: productData.ImageUrl,
        }
      ]
    };

    return convertedData;
  };
const handleping = async() => {
  const response =  await axios.get('http://localhost:3000/ping');
  alert(response.data);
}

  const handleAddProduct = async () => {
    
    showPending();
    setLoading(true);
    const formattedData = convertToShopifyFormat();

    try {
      const response = await axios.post('https://product-server-azure.vercel.app/add-product', formattedData, { withCredentials: true });

      // Handle the response as needed
      
      console.log(response.data);
      setLoading(false);
      showSuccess();
      
    } catch (error) {
      // Handle error
      showError();
      console.error(error.response);
      
    }
  };


  const handlePrint = () =>{
       window.print();
  };
  const handleSave = () => {
    const barcodeContainer = document.querySelector('.barcode-container');
    const svgElement = barcodeContainer.firstChild.cloneNode(true);
  
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
  
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'barcode.svg';
    a.click();
  };

 
  
  
  useEffect(() => {
    // Fetch product data from Firebase using the document ID
    const fetchProductData = async () => {
      try {
        const productDocRef = doc(db, 'Products', props.data);
        const productSnapshot = await getDoc(productDocRef);

        if (productSnapshot.exists()) {
          // Set the product data in the state
          setProductData(productSnapshot.data());
          
        } else {
          console.error('Product not found in Firestore.');
        }
      } catch (error) {
        console.error('Error fetching product data from Firestore:', error);
      }
    };

    fetchProductData();
  }, [props.data]); // Fetch data when the document ID changes

  if (!productData) {
    return <span className="loading loading-spinner text-info"></span>; // You can render a loading state while fetching data
  }
  return (
    <div>
     <h1 className='font-bold'>Successfully Added Item</h1>   
    <div className="card card-side bg-base-100 shadow-xl m-4 overflow-hidden">
    
<img src={productData.ImageUrl} alt="Product" style={{ maxWidth: '100%', maxHeight: '300px', width: 'auto', height: 'auto' }}/>
<div className="card-body">
  <h2 className="card-title">{productData.Name}</h2>
  <p>{productData.Description}</p>
  <div className='flex'>
      <p className='font-bold'>Price: <span className='font-medium'>{productData.Price}</span></p>
      <p className='font-bold'>Product Id: <span className='font-medium'></span>{props.data}</p>
      <p className='font-bold'>Category: <span className='font-medium'>{productData.Category}</span></p>
      <p className='font-bold'>Manufacturer Name: <span className='font-medium'>{productData.manufacturer}</span></p>
      <p className='font-bold'>Quantity: <span className='font-medium'>{productData.Quantity}</span></p>
      
      
  </div>
  <div className="card-actions justify-center mt-5">
  {/* <Barcode value={`https://localhost:5173/barcode/${props.data}`}  width={1}/> */}
  <div className="barcode-container"><Barcode value={props.data}  width={1} height={50} ref={barcodeRef}/> </div>
  <button className="btn btn-primary mx-5" onClick={handlePrint}>Print Bar Code</button>
    <button className="btn btn-primary mx-5" onClick={handleSave}>Save to device</button>

  </div>
</div>
</div>
<h1 className='font-bold mb-8'>E commerce Listing</h1>
<div className='flex justify-center'>
  
        <div className='flex justify-center items-center bg-white w-1/2 p-3 rounded-2xl shadow-md'>
          <div className='w-10 mx-5'><img  src="https://cdn.icon-icons.com/icons2/2428/PNG/512/shopify_black_logo_icon_147085.png" alt="store logo" /></div>
          <h1 className='mx-5 font-bold'>Add Product to Shopify</h1>
          <button className="btn btn-outline btn-success" onClick={handleAddProduct}>Add</button>
         {loading? <Loader/>:<></>}
        </div>
        
        </div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  </div>
  )
}

export default Summary
