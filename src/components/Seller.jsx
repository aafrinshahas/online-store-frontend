import amazon from '../assets/icons/amazon.png'
import ebay from '../assets/icons/ebay.png'
import rakuten from '../assets/icons/rakuten.png'
import shopee from '../assets/icons/shopee.png'
import walmart from '../assets/icons/walmart.png'

function Seller(){
    return(
        <div className='seller'>
              <h2 className="text-3xl font-semibold text-[#022b41] text-center">Top Sellers</h2>
        <div className=" flex gap-9 justify-evenly mt-8">
      
             <div className="icon">
               <img src={amazon} alt={amazon} className='img'/>
             </div>
             <div className="icon">
               <img src={ebay} alt={ebay} className='img'/>
             </div>
             <div className="icon">
               <img src={rakuten} alt={rakuten} className='img'/>
             </div>
             <div className="icon">
               <img src={shopee} alt={shopee} className='img'/>
             </div>
             <div className="icon">
               <img src={walmart} alt={walmart} className='img'/>
             </div>
        </div>
        </div>
    )
}

export default Seller;