import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../Context/CartContext';
import Home from '../HOme/Home';
import Footer from '../Foooter/Footer';

const CardPage = () => {
  const { cartItems } = useContext(CartContext);
  const [data, setData] = useState(cartItems);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever data changes
    const newTotal = data.reduce((acc, innerArray) => {
      return acc + innerArray[4] * innerArray[5];
    }, 0);
    setTotal(newTotal);
  }, [data]);

  const handleIncreaseQuantity = (index) => {
    const newData = [...data];
    newData[index][4]++; // Increase quantity
    setData(newData); // Update the state with the new data
  };

  const handleDecreaseQuantity = (index) => {
    const newData = [...data];
    if (newData[index][4] > 1) {
      newData[index][4]--; // Decrease quantity
      setData(newData); // Update the state with the new data
    }
  };

  return (
    <div>
    <Home />
    <div className="h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left ml-6 font-semibold">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((innerArray, index) => (
                    <tr key={index}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={innerArray[3].key} // Replace with your image source
                            alt="Product image"
                          />
                          <span className="font-semibold">
                            {innerArray[0].key} {/* Replace with your product name */}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">${innerArray[5]}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={() => handleDecreaseQuantity(index)}
                          >
                            -
                          </button>
                          <span className="text-center w-8">{innerArray[4]}</span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={() => handleIncreaseQuantity(index)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>{total ? "$1.99" : null}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  );
};

export default CardPage;
