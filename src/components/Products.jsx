import Header from "./Header";
import ProductsCard from "./ProductsCard";

function Products({products}){
    console.log(products)
    return(
        <div className="products">
            <h2 className="text-3xl font-semibold text-[#022b41] text-center">Trending Collections</h2>
           <div className="products">
           <div className="product-container pt-10 max-w-screen-xl mx-auto grid lg:grid-cols-4 gap-10 md:grid-cols-3 sm:grid-cols-2 ">
            {products.map((item)=>(
                <ProductsCard key={item._id} product={item}/>
            ))}
          
        </div>
           </div>
        </div>
    )
}

export default Products;