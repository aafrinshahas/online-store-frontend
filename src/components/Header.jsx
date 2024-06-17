import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header(){
  const productData = useSelector((state)=> state.bazaar.productData);
  const userInfo = useSelector((state)=> state.bazaar.userInfo);
  console.log(userInfo)
  console.log(productData)
    return(
        <div className="header flex items-center justify-between text-[#022b41] sticky top-0 z-50 p-5 bg-white shadow-md shadow-slate-800">
        <div className="logo text-4xl">
          <Link to='/'><p className=" font-semibold">UrbanBazaar</p></Link>
        </div>
  
        <div className="menu flex items-center gap-6  font-semibold">
          
          {/* <Link to='/'><p className="text-xl">Home</p></Link>
          <Link to='/store'><p className="text-xl">Store</p></Link>
          <Link to='/contact'><p className="text-xl">Contact</p></Link> */}
          {/* <button><i class="fa-solid fa-heart text-[#022b41] text-xl"></i><span className="text-sm font-bold ">2</span></button> */}
          <Link to='/cart'><button><i class="fa-solid fa-cart-shopping text-[#022b41] text-xl"></i><span className="text-sm font-bold">{productData.length}</span></button></Link>
          <Link to='/login'>
          {userInfo? <p className="font-semibold text-lg underline">{userInfo.name}</p> : <i class="fa-solid fa-user text-[#022b41] text-xl"></i>}
          </Link>
         
        </div>
     </div>
    )
}

export default Header;