import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search(){
   const [searchValue, setSearchvalue] = useState();
    const navigate = useNavigate();

    const searchHandler = () => {
      
        navigate(`/search?keyword=${searchValue}`)
    }

    return(
        <div className="search-container">
        <div className="search-bar border border-[#022b41] rounded-lg w-[80%] flex justify-between items-center px-4  py-3">
         <input type="text" placeholder="Search the products....." className=" outline-none w-[100%]" onChange={(e) => setSearchvalue(e.target.value)} onBlur={searchHandler}/>
         <button onClick={searchHandler}><i class="fa-solid fa-magnifying-glass text-[#022b41]"></i></button>
        </div>
        </div>
    )
}

export default Search;