import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Productrequest = () => {
    const navigate = useNavigate();
    
    const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);
  const [approve, setapprove] = useState(false);



  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/productrequestall`);
      console.log("response: ", response);
      console.log(products);
      setProducts(response.data.data);
    } catch (error) {
      console.log("error in getting all requests", error);
    }
  };

  const deleteData = async (id)=>{
    try {
      const response = await axios.delete(`http://localhost:8000/productreq/${id}`)
      console.log("response: ", response.data);
      setdelete(!Delete)
    } catch (error) {
      console.log("error in deleting all requests", error);
    }
    alert("Product disapproved");
  };

  const approveData = async (id)=>{
    try {
      const response = await axios.get(`http://localhost:8000/productreqedit/${id}`)
      console.log("response: ", response.data);
    } catch (error) {
      console.log("error in approving all requests", error);
    }
    alert("Product approved");
    window.location.reload(false);
  };

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
    // return () => {
    //   console.log('Cleanup Function');
    //  }
}, [Delete , productsBoolean ])

  return (
    <div>
        <h1 className='dasfasfkasfhoiasbfbfa'  >Product Approval Requests </h1>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Product  Price
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Product Category
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Approves
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                    Disapproves
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                
                <th scope="col" class="px-6 py-3">
                    {/* <div class="flex items-center">
                        Price
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div> */}
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>



            {products.map((value)=>(
                <>
            <tr class=" border-b    bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value.name}
                </th>
                <td class="px-6 py-4">
                ${value.price}
                </td>
                <td class="px-6 py-4">
                   {value.category}
                </td>

                <td    className='lllololo'   onClick={()=>{approveData(value._id)}}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Approve
                </td>
                <td    className='lllololo'   onClick={()=>{
                    deleteData(value._id)
                }}  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                DisApprove
                </td>
                <td class="px-6 py-4 text-right">
                    {/* <BasicModal   Image = {value.imageUrl}    id={value._id}    /> */}
                </td>
                <td    className='lllololo'   onClick={()=>{navigate(`/EditProduct/${value._id}`, { replace: true }) }}
                  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Edit
                </td>
            </tr>
           </>
            ))}
   
        </tbody>
    </table>
</div>


    </div>

  )
}
export default Productrequest;