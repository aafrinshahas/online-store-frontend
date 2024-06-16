import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>

        
        <div className="footer flex items-start gap-8 border-t border-[#A7B9C3] justify-between flex-wrap">
            <div></div>
            <div className="card flex justify-center flex-grow">
            <div className="short-content">
            <div className="logo text-4xl">
            <Link to='/'><p className="text-[#022b41] font-semibold pb-2">UrbanBazaar</p></Link>
          </div>
          <p className="pb-2 text-[#333333]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nihil?</p>
          <div className="social-link text-2xl">
            <Link to='/'><i class="fa-brands fa-facebook-f text-[#022b41] mr-2"></i></Link>
            <Link to='/'><i class="fa-brands fa-instagram text-[#022b41] ml-2"></i></Link>
          </div>
            </div>
            </div>
            <div className="card flex justify-center flex-grow">
            <div className="menu">
                <p className="text-lg text-[#022b41] font-semibold">Menu</p>
                <Link to='/'><p className="pb-1 font-semibold text-[#333333]">Home</p></Link>
                <Link to='/store'><p className="pb-1 font-semibold text-[#333333]">Store</p></Link>
                <Link to='/contact'><p className="pb-1 font-semibold text-[#333333]">Contact</p></Link>
            </div>
            </div>
           <div className="card flex justify-center flex-grow">
           <div className="legal">
                <p className="text-lg text-[#022b41] font-semibold">Legal</p>
                <p className="pb-1 font-semibold text-[#333333]">Privacy Policy</p>
                <p className="pb-1 font-semibold text-[#333333]">Terms and Conditions</p>
                <p className="pb-1 font-semibold text-[#333333]">Return Policy</p>
            </div>
           </div>
            
        </div>
          <div className="copyright text-center bg-[#022b41] p-4 text-white font-semibold text-sm">
            <p>Copyright@2024 UrbanBazaar. All Rights Reserved.</p>
          </div>
        </div>
    )
}

export default Footer;