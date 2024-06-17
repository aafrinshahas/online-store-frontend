import Header from "./Header";
import ProductsCard from "./ProductsCard";
import { useState } from "react";
function Products({products}){
    console.log(products)
    const [visible, setVisible] = useState(8)

    function handleView(){
        setVisible((prev) => prev + 4)
    }
    return(
        <div className="products" id="shop">
            <h2 className="text-3xl font-semibold text-[#022b41] text-center">Trending Collections</h2>
           <div className="products">
           <div className="product-container pt-10 max-w-screen-xl mx-auto grid lg:grid-cols-4 gap-10 md:grid-cols-3 sm:grid-cols-2 ">
            {products.slice(0,visible).map((item)=>(
                <ProductsCard key={item._id} product={item}/>
            ))}
          
        </div>
        <div className="btns text-center pt-14">
                    <button className='font-semibold px-5 py-2 rounded-r-3xl rounded-bl-3xl uppercase text-white bg-[#022b41]' onClick={handleView}>view more</button>
                </div>
           </div>
        </div>
    )
}

export default Products;