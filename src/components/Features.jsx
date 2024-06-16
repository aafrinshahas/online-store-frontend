function Features(){
    return(
        <div className="features flex flex-wrap gap-10 justify-between text-center">
           <div className="list p-2 flex-grow">
            <div className="icon"><i class="fa-solid fa-truck-fast bg-[#D09423] rounded-full text-[#022b41]"></i></div>
            <p className="font-semibold text-[#022b41] text-2xl p-2">Fast & Free Shipping</p>
           </div>
           <div className="list p-2 flex-grow">
            <div className="icon"><i class="fa-solid fa-shop bg-[#D09423] rounded-full text-[#022b41]"></i></div>
            <p className="font-semibold text-[#022b41] text-2xl p-2">Easy to Shop</p>
           </div>
           <div className="list p-2 flex-grow">
            <div className="icon"><i class="fa-solid fa-globe bg-[#D09423] rounded-full text-[#022b41]"></i></div>
            <p className="font-semibold text-[#022b41] text-2xl p-2">24/7 Support</p>
           </div>
           <div className="list p-2 flex-grow">
            <div className="icon"><i class="fa-solid fa-right-left bg-[#D09423] rounded-full text-[#022b41]"></i></div>
            <p className="font-semibold text-[#022b41] text-2xl p-2">Hassle Free Returns</p>
           </div>
        </div>
    )
}

export default Features;