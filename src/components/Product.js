
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";

function Product(){
const dispatch = useDispatch()
const [details, setDetails] = useState({})
let [baseQty, setBaseQty] = useState(1);

const location = useLocation();
useEffect(()=>{
console.log(location.state.item)
setDetails(location.state.item)
}, [])
    return(
        <div>
              <div className="m-10 flex flex-wrap gap-12 items-center">
            <div className="single-product-image relative border flex-grow">
            <div>
                  <img src={details.image} alt="productImg" className="img object-contain p-3"></img>
                  </div>
                  <div className=" absolute top-4 right-0">
                {
                    details.isNew && (
                        <p className="bg-[#022b41] text-white font-semibold px-6 py-1">Sale</p>
                    )
                }
            </div>
            </div>
                  <div className="single-product-info flex-grow">
                      <div>
                        <h2 className="text-4xl font-semibold text-[#022b41] pb-2">{details.title}</h2>
                        <div className="flex items-center gap-4 mt-3 text-xl pb-2">
                        <p className="line-through text-gray-500">₹{details.oldPrice}</p>
                        <p className="font-semibold">₹{details.price}</p>
                        </div>
                      </div>
                      <div className="ratings pb-2">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{width: `${details.ratings/5 * 100}%`}}></div>
                        </div>
                      </div>
                      <p className="text-[#022b41] text-lg font-semibold pb-2">Description</p>
                    <p className="text-base text-gray-500 pb-4">{details.description}</p>
                    <div className="flex gap-8">
                        <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 mb-4">
                            <p className="text-sm">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                            <button onClick={()=>setBaseQty(baseQty === 1? baseQty=1: baseQty-1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
                            <span>{baseQty}</span>
                            <button  onClick={()=>setBaseQty(baseQty+1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
                            </div>
                         
                        </div>
                        <div>
                            <button 
                            onClick={()=>dispatch(addToCart({
                                _id: details._id,
                                title: details.title,
                                image: details.image,
                                price: details.price,
                                quantity: baseQty,
                                description: details.description
                            })
                        ) & toast.success(`${details.title} is added`)
                        
                        }
                            className="bg-[#022b41] text-white px-6 py-3 active:bg-gray-800 font-semibold">Add to Cart</button>
                        </div>
                    </div>
                    <p className="capitalize text-sm pb-2"><span className="text-[#022b41]">Category:</span> {details.category}</p>
                    <p className="capitalize text-sm"><span className="text-[#022b41]">Seller:</span> {details.seller}</p>
                  </div>
              </div>
              <ToastContainer
              position="top-left"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              />
        </div>
    )
}

export default Product;