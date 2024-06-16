import { useEffect, useState } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Products";
import Seller from "../components/Seller";
import { useLoaderData } from "react-router-dom";

function Home(){
    const [products, setProducts] = useState([]);
    const data = useLoaderData();
    console.log(data.data)
useEffect(()=>{
   setProducts(data.data)
},[data])

    return(
        <div className="home">
        <div className="hero-section ">
        
        {/* <Header/> */}
        <div className="content flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-semibold text-[#022b41] py-5">Unlocking endless aisles, One click at a time.</h1>
        <p className="py-3 text-white font-semibold text-xl">Discover endless choices, shop securely, and enjoy swift delivery at <span className="text-[#022b41]">Urban</span>Bazaar. Your go-to destination for hassle-free online shopping. Start exploring now!</p>
        <div className="btns py-3">
        <button className="text-lg font-semibold text-white">Shop Now</button>
        </div>
        </div>
        
        </div>
        
        
        <Features/>
        <Product products={products}/>
        <Seller/>
        <div className="overlay-container">
        <div className="overlay"></div>
        <div className='z-10'>
        <p className="text-xl font-semibold text-white">Your online emporium for all things fabulous. Browse, click, and indulge with ease at UrbanBazaar. Start shopping today!</p>
        <div className="btns py-3 " >
        <button className="text-lg font-semibold bg-[#022b41] text-[#fff]">Shop Now</button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home;