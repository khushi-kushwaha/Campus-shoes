import { NavLink } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";


const Nav = () => {


  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  useEffect(() => {
    document.body.style.overflow = isSearchOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [isSearchOpen]);
    
  return (
    <>
    <div className="flex justify-center items-center  bg-red-500 h-8 w-full">
      <h1 className="text-white text-xs ">Get EXTRA 10% OFF On Orders Above ₹1299* Code: FEST10</h1>
      </div>
      <div className="nav">
      <div className="logoarea px-8 flex justify-between items-center  bg-white-100 h-20 w-full ">
    
      <div>
        <button onClick={toggleSearch} className= {"hover:text-red-700 text-xs"}><i className="ri-search-line"></i>  Search</button>
      {isSearchOpen && (
        <div
        className={`fixed inset-0 bg-white bg-opacity-1 flex p-20 justify-center z-50 transition-opacity duration-300 ${
          isSearchOpen ? 'opacity-100' : 'opacity-0'
        }`}
      ><input
      type="text"
      className=" bg-[#F2F2F2] rounded-md w-1/2 h-10 px-5 "
      placeholder="Search..."
    />
    <i className="ri-close-large-line text-3xl text-zinc-400 ml-20" onClick={() => setIsSearchOpen(false)}
      title="To Close It"></i>
    </div>

)}</div>

        <img  className="absolute left-1/2 transform -translate-x-1/2 "  src="https://www.campusshoes.com/cdn/shop/files/logo-withour-r_220x.jpg?v=1728559644 "/>
        <div className="logoarea-right flex gap-5 items-center ">
          <NavLink className= {"hover:text-red-700 text-xs"} to ="/account">Account</NavLink>
          <NavLink className={"hover:text-red-700 flex items-center text-xs"} to="/wishlist">Wishlist <i className="ri-heart-3-line" style={{ fontSize: '1.8em' }}></i></NavLink>
          <NavLink className = {"hover:text-red-700 flex items-center text-xs"} to="/cart">Cart <i className="ri-shopping-cart-line" style={{fontSize: '1.8em' }}></i></NavLink>

          <NavLink className="hover:text-red-700 flex items-center text-xs" to="#" onClick={(e) => {e.preventDefault();window.open('/stores', '_blank'); }}> Stores <i className="ri-map-pin-line" style={{ fontSize: '1.8em' }}></i></NavLink>

          <NavLink className = {"hover:text-red-700 flex items-center text-xs"} to="#" onClick={(e) => {e.preventDefault();window.open('/trackorder', '_blank'); }}>Track Order <i className="ri-luggage-cart-fill" style={{fontSize: '1.8em' }}></i></NavLink>

          <NavLink to = "/"></NavLink>
        </div>
      </div>




<div className="main-nav h-14 flex justify-center gap-10 items-center border-y border-gray-300 relative">
  
 
  <div className="group">
    <NavLink 
      to="/Sale" 
      className="relative text-sm text-gray-600 hover:text-red-700 transition-colors duration-500"
    >
      SALE
      <div className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </NavLink>

  
    <div className="absolute text-sm text-gray-600 left-0 w-screen top-full h-14 bg-white border-y border-gray-300 flex gap-10 justify-center items-center opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
      <NavLink to="/Women">WOMEN</NavLink>
      <NavLink to="/Men">MEN</NavLink>
      <NavLink to="/Kids">KIDS</NavLink>
    </div>
  </div>
      

  <div className="group">
    <NavLink 
      to="/NewArrivals" 
      className="relative text-sm text-gray-600 hover:text-red-700 transition-colors duration-500"
    >
      NEW ARRIVALS
      <div className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </NavLink>

    
    {/* <div className="absolute text-sm text-gray-600 left-0 w-screen top-full h-14 bg-white border-y border-gray-300 flex gap-10 justify-center items-center opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
      <NavLink to="/Women">WOMEN</NavLink>
      <NavLink to="/Men">MEN</NavLink>
      <NavLink to="/Kids">KIDS</NavLink>
    </div> */}
  </div>

  <div className="group">
    <NavLink 
      to="/Women" 
      className="relative text-sm text-gray-600 hover:text-red-700 transition-colors duration-500"
    >
      WOMEN
      <div className="absolute  left-0 -bottom-1 h-0.5 w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </NavLink>

  
    <div className="absolute text-sm text-gray-500 left-0 w-screen top-full h-auto  p-2  bg-white border-y border-gray-300 flex gap-x-24 flex-wrap justify-between items-start  opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
      <div className="flex gap-5 flex-col">
        <h1>SHOES</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Running Shoes</a>
          <a href="#">Sports Shoes</a>
          <a href="#">Walking Shoes</a>
          <a href="#">Casual Shoes</a>
          <a href="#">Sneakers</a>
        </div>
        </div>

      <div className="flex gap-5 flex-col">
        <h1>SANDALS AND SLIPPERS</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Sport</a>
          <a href="#">Casual</a>
          <a href="#">Clogs</a>  
        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>FEATURE COLLECTIONS</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">FLIP AND SHOES </a>
          <a href="#">YOGA WEAR</a>
          <a href="#">OG's</a>  
        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>SLIPPER</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">FLIP-FLOPS</a>
          <a href="#">SLIDES</a>

        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>ACCESSORIES</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">SOCKS</a>
        </div>    
      </div>

      <img src="https://www.campusshoes.com/cdn/shop/files/Women_98d08ea4-2231-459b-bbf2-f3eb806655b9_360x.jpg?v=1667386497" className="transform scale-75"/>
      
    </div>

  </div>

  <div className="group">
    <NavLink 
      to="/Men" 
      className="relative text-sm text-gray-600 hover:text-red-700 transition-colors duration-500"
    >
      MEN
      <div className="absolute  left-0 -bottom-1 h-0.5 w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </NavLink>

  
    <div className="absolute text-sm text-gray-500 left-0 w-screen top-full h-auto  p-2  bg-white border-y border-gray-300 flex gap-x-24 flex-wrap justify-between items-start  opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
      <div className="flex gap-5 flex-col">
        <h1>SHOES</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Running Shoes</a>
          <a href="#">Sports Shoes</a>
          <a href="#">Walking Shoes</a>
          <a href="#">Casual Shoes</a>
          <a href="#">Sneakers</a>
        </div>
        </div>

      <div className="flex gap-5 flex-col">
        <h1>SANDALS AND SLIPPERS</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Sport</a>
          <a href="#">Casual</a>
          <a href="#">Clogs</a>  
        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>FEATURE COLLECTIONS</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">NITRO BOOST </a>
          <a href="#">BALL-TECH</a>
          <a href="#">MOTOMANIA</a>
          <a href="#">OG's</a>  
        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>SLIPPER</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">FLIP-FLOPS</a>
          <a href="#">SLIDES</a>

        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>ACCESSORIES</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">SOCKS</a>
        </div>    
      </div>

      <img src="https://www.campusshoes.com/cdn/shop/files/Men_d20cacdc-584d-45c8-9a83-fa3a0d2f748a_360x.jpg?v=1667386512" className="transform scale-75"/>
      
    </div>

  </div>


  <div className="group">
    <NavLink 
      to="/Kids" 
      className="relative  text-sm text-gray-600 hover:text-red-700 transition-colors duration-500"
    >
      KIDS
      <div className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </NavLink>

  
    <div className="absolute text-sm text-gray-500 left-0 w-screen top-full h-80 py-8 bg-white border-y border-gray-300 flex gap-28 flex-wrap justify-center items-start  opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
      <div className="flex gap-5 flex-col">
        <h1>SHOES</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Running Shoes</a>
          <a href="#">Sports Shoes</a>
          <a href="#">Walking Shoes</a>
          <a href="#">Casual Shoes</a>
          <a href="#">Sneakers</a>
        </div>
        </div>

      <div className="flex gap-5 flex-col">
        <h1>SANDALS AND SLIPPERS</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Sport</a>
          <a href="#">Casual</a>
          <a href="#">Clogs</a>  
        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>FEATURE COLLECTIONS</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Tom and Jerry</a>
          <a href="#">Doremon</a>
          <a href="#">Ben 10</a>  
        </div>    
      </div>

      <div className="flex gap-5 flex-col">
        <h1>SCHOOLS SHOES</h1>
        <div className="flex flex-col gap-3" >
          <a href="#">Boys</a>
          <a href="#">Girls</a>
        </div>    
      </div>
      <img src="https://www.campusshoes.com/cdn/shop/files/Kids_dfc625a6-b691-4b19-9fe5-c4ac14df500e_360x.jpg?v=1667386523"/>
      
    </div>
  </div>


  <div className="group">
    <NavLink 
      to="/collections" 
      className="relative text-sm text-gray-600 hover:text-red-700 transition-colors duration-500"
    >
      COLLECTIONS
      <div className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </NavLink>

  
    <div className="absolute text-sm text-gray-600 left-0 w-screen top-full h-14 bg-white border-y border-gray-300 flex gap-10 justify-center items-center opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
      <NavLink to="/Darknight">THE DRAK KNIGHT</NavLink>
      <NavLink to="/CampusOg">CAMPUS OG's</NavLink>
      <NavLink to="/Clogs">CLOGS</NavLink>
      <NavLink to="/NitroBoost">NITRO BOOST</NavLink>

    </div>
  </div>


  <div className="group">
    <NavLink 
      to="/Trending" 
      className="relative  text-sm text-gray-600 hover:text-red-700 transition-colors duration-500"
    >
      TRENDING
      <div className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </NavLink>

  
    <div className="absolute text-sm  text-gray-600 left-0 w-screen top-full h-14 bg-white border-y border-gray-300 flex gap-10 justify-center items-center opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
      <NavLink to="/TopSelling">TOP SELLING</NavLink>
      <NavLink to="/BlackShoes">BLACK SHOES </NavLink>
      <NavLink to="/Whiteshoes">WHITE SHOES</NavLink>
      <NavLink to="/ExclusiveCollection">EXCLUSIVE COLLECTIONS</NavLink>

    </div>
  </div>
 
</div>


      </div>
    </>
  )
}

export default Nav