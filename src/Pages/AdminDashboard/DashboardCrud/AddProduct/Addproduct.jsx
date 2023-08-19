import React, { useState } from 'react'
// import './Product.css'
import axios from 'axios'
import '../../product.css'
const AddProduct = () => {
  const [Name, setName] = useState()
  const [Price, setPrice] = useState()
  const [Description, setDescription] = useState()
  const [Input, setInput] = useState()
  const [category, Setcategory] = useState()
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const baseUrl = 'http://localhost:8000/api/v1'


  const getInitialState = () => {
    const value = "Shirt";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };



  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    setSelectedImages(imageFiles);

    const urls = imageFiles.map((file) => {
      const url = URL.createObjectURL(file);
      console.log('Image URL:', url); // Add this line to console log the URL
      return url;
    });

    setImageUrls(urls);

  };

  const handleUpload = async () => {
    console.log(imageUrls);
    console.log(Name);
    console.log(Price);
    console.log(value);
    console.log(Description);
  
    if (!Name || !imageUrls || !Description || !value || !Price) {
      alert('Product Not Added');
    } else {
      try {
        alert('Product Added');
        
        const formData = new FormData();
        formData.append("Name", Name);
        formData.append("Price", Price);
        formData.append("Description", Description);
        formData.append("Image", imageUrls);
        formData.append("category", value);
  
        const response = await axios.post(
          `http://localhost:8000/api/v1/AddProduct`,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
  
        console.log(`Upload Success`, response.data);
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
    }
  };
  






  return (
    <div>
      <div class="bg-slate-200  h-auto	  asddasdasdasdasdas flex items-center">
        <div class="w-full elokpkk">
          <h2 class="text-center text-black font-bold text-2xl uppercase dasdsd mb-10">Add Product </h2>
          <div class="asdasdasdasdasdas  p-6  rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">

            <div class="mb-5">
              <label for="name" class="block mb-2 font-bold text-white">Name</label>
              <input onChange={(e) => {
                setName(e.target.value)
              }} type="text" id="name" name="name" placeholder="Enter Prouct Name ." class="border border-gray-300 shadow p-3 w-full rounded mb-" />
            </div>

            <div class="mb-5">
              <label for="twitter" class="block mb-2 font-bold text-white">Price</label>
              <input onChange={(e) => {
                setPrice(e.target.value)
              }} type="number" required='true' id="twitter" name="twitter" placeholder="Enter Product Price" class="border  border-gray-300 shadow p-3 w-full rounded mb-" />

            </div>
            <div class="mb-5">

              <label for="twitter" class="block mb-2 font-bold text-white">Category</label>
              <select class="border  border-gray-300 shadow p-3 w-full rounded mb-" value={value} onChange={handleChange}>
                <option value="Shirt">Shirt</option>
                <option value="Trouser">Trouser</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Shirt">Shirt</option>
                <option value="Cap">Cap</option>
              </select>
              <p>{`You selected ${value}`}</p>
              {/* <input     type="text" required='true'  id="twitter" name="twitter" placeholder="Enter Product Category" class=""/> */}

            </div>
            <div class="mb-5">
              <label for="twitter" class="block mb-2 font-bold text-white">Description</label>
              {/* <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." /> */}
              <textarea style={{ "height": "100px" }} onChange={(e) => {
                setDescription(e.target.value)
              }} class="border  border-gray-300 shadow p-3 w-full rounded mb-" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="image-upload-container">
              <label className="file-label">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
                Choose Images
              </label>


              <div className="selected-images">
                {imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Image ${index}`}
                    className="uploaded-image"
                  />
                ))}
              </div>
            </div>


            <div id='img22' className='mkbdsds' >

            </div>
            <button onClick={handleUpload} class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Add Product </button>

          </div>
        </div>
      </div>






    </div>
  )
}

export default AddProduct