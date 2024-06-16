import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function CartItem()  {
    const dispatch = useDispatch();
     const productData = useSelector((state) => state.bazaar.productData)
    console.log(productData)
    return(
        <div className="w-2/3 pr-10">
           <div className="w-full">
            <h2 className="text-2xl">shopping cart</h2>
           </div>
           <div>
            {
                productData.map((item)=>(
                    <div key={item._id} className="flex items-center justify-between gap-6 mt-6">
                        <div className="flex items-center gap-3">
                        <i 
                        onClick={()=>dispatch(deleteItem(item._id))&toast.error(`${item.title} is removed`)}
                        class="fa-solid fa-x text-lg text-gray-600 hover:text-red-600 cursor-pointer duration-300"></i>
                        <img src={item.image} alt="productImg" className="w-32 h-32"/>
                        </div>
                        <h2 className="w-48">{item.title}</h2>
                        <p className="w-14">₹ {item.price}</p>
                        <div className="w-50 flex items-center justify-between text-gray-500 gap-4 border p-3">
                            <p className="text-sm">Quantity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                            <button 
                            
                            onClick={()=>dispatch(decrementQuantity({
                                _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description
                            }))} 
                            
                            className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
                            <span>{item.quantity}</span>
                            <button 
                           onClick={()=>dispatch(increamentQuantity({
                            _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description
                           }))}
                             className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
                            </div>
                         
                        </div>
                        <p className="w-14">₹{item.quantity * item.price}</p>
                    </div>
                ))
            }
           </div>
           <button 
           onClick={()=>dispatch(resetCart()) & toast.error("Your Cart is Empty")}
           className="bg-red-500 text-white mt-8 ml-7 py-2 px-6 hover:bg-red-800 duration-300">Reset Cart</button>
           <Link to='/'><p className="ml-7 mt-4 text-lg font-semibold"><i class="fa-solid fa-arrow-left mr-3"></i> Go to shipping</p></Link>
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

export default CartItem;