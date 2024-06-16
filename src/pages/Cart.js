import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart(){
    const navigate = useNavigate();
    const productData = useSelector((state) => state.bazaar.productData);
    const userInfo = useSelector((state)=> state.bazaar.userInfo);
    const [totalAmt, setTotalAmt] = useState("");
    const [paynow, setPaynow] = useState(false)
    useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
        price += item.price * item.quantity
        return price
    })
    console.log(price)
    setTotalAmt(price.toFixed(2))
    }, [productData])

    const handleCheckout = () => {
        if(userInfo){
           setPaynow(true)
           toast.success("checkout successfully")
        }else{
            toast.error("please sign in before checkout")
            navigate('/login')
        }
    }
    return(
        <div>
          <h2 className="font-semibold text-center text-4xl mt-6">Cart Details</h2>
          <div className="max-w-screen-xl mx-auto py-20 flex">
            <CartItem/>
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
               <div>
                <h2 className="text-2xl font-medium">Cart Totals</h2>
                <p className="flex items-center justify-between gap-4 text-base mt-3">
                    Subtotal{" "}
                    <span className="text-lg">₹ {totalAmt}</span>
                </p>
                <p className="flex items-start gap-4 text-base mt-3">
                    Shipping{" "}
                    <span className=" text-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, possimus!</span>
                </p>
                  
               </div>
               <p className="flex justify-between mt-6">
        
                Total <span className="text-xl font-semibold">₹ {totalAmt}</span>
               </p>
               <button onClick={handleCheckout} className="bg-black text-white w-full py-3 mb-2 mt-6 hover:bg-gray-800 duration-300">proceed to checkout</button>
            </div>
          </div>
        </div>
    )
}

export default Cart;