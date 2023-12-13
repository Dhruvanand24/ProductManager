import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";


const Modal = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const location = useLocation();
    const navigate = useNavigate();
   

    const onSubmit = (data) => {
        const name = data.name;
        const description = data.description;
        const price = data.price;
        const manufacturer = data.manufacturer;
        const quantity = data.quantity;
        const category = data.category;
        const imageurl = data.imageurl
        document.getElementById("my_modal_5").close()
        navigate("/barcode", {state:{from: location}})
      };
    

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
    <div className="modal-box">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
          <h3 className="font-bold text-lg">Add Product</h3>

          {/* name */}
          <div className="form-control mb-3">
            
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name")}
            />
          </div>

          {/* description */}
          <div className="form-control mb-3">
            
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered"
              {...register("description")}
            />
            
          </div>
           {/* Price */}
           <div className="form-control mb-3">
          
            <input
              type="number"
              placeholder="price"
              className="input input-bordered"
              {...register("price")}
            />
            
          </div>
           {/* quantity */}
           <div className="form-control mb-3">
            
            <input
              type="number"
              placeholder="quantity"
              className="input input-bordered"
              {...register("quantity")}
            />
            
          </div>
          {/* imageurl */}
          <div className="form-control mb-3">
           
            <input
              type="text"
              placeholder="imageurl"
              className="input input-bordered"
              {...register("quantity")}
            />
            
          </div>
            {/* manufacturer */}
            <div className="form-control mb-3">
           
            <input
              type="text"
              placeholder="manufacturer"
              className="input input-bordered"
              {...register("manufacturer")}
            />
            
          </div>
          {/* manufacturer */}
          <div className="form-control mb-3">
           
            <input
              type="text"
              placeholder="category"
              className="input input-bordered"
              {...register("category")}
            />
            
          </div>

          {/* error */}
          {
            errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
          }

          {/* Add button btn */}
          <div className="form-control mt-4">
            <input
              type="submit"
              value="AddProduct"
              className="btn bg-blue-500 text-white"
            />
          </div>

        
          <button 
          htmlFor="my_modal_5"
          onClick={() => document.getElementById("my_modal_5").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button>
        </form>

       
      
      </div>
    </div>
  </dialog>
  )
}

export default Modal
