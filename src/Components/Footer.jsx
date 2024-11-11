const Footer = () => {
  return (
    <div className="h-full w-full">
        <div className="h-2/4 w-full bg-[#F7F1F0] flex justify-evenly items-center py-4">
          <div className="flex flex-col justify-center items-center space-y-2">
            <i className="ri-luggage-cart-fill text-2xl"></i>
            <span>Fast Delivery</span>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <i className="ri-price-tag-3-line text-2xl"></i>
            <span>15 Days Easy Return</span>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <i className="ri-map-pin-line text-2xl"></i>
            <span>Track Order</span>
          </div>
        </div>
        
        <div className="bg-[#F4DFDB] h-full w-screen p-10">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-zinc-900 mb-3">What's In Store</h1>
                <a href="#" className="text-zinc-600 text-sm">New Arrivals</a>
                <a href="#" className="text-zinc-600 text-sm">Men</a>
                <a href="#" className="text-zinc-600 text-sm">Women</a>
                <a href="#" className="text-zinc-600 text-sm">Kids</a>
                <a href="#" className="text-zinc-600 text-sm">Track Order</a>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-zinc-900 mb-3">Company Info & Policies</h1>
                <a href="#" className="text-zinc-600 text-sm">Blogs</a>
                <a href="#" className="text-zinc-600 text-sm">Corporate</a>
                <a href="#" className="text-zinc-600 text-sm">Terms and Conditions</a>
                <a href="#" className="text-zinc-600 text-sm">Privacy and Cookies Policy</a>
                <a href="#" className="text-zinc-600 text-sm">Contact Us</a>
                <a href="#" className="text-zinc-600 text-sm">Return/Exchange</a>
                <a href="#" className="text-zinc-600 text-sm">Return Policy</a>
                <a href="#" className="text-zinc-600 text-sm">Shipping Policy</a>

              </div>

              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-zinc-900 mb-3">Get In Touch</h1>
                <h2 className="font-extrabold text-zinc-600">For Online Order</h2>
                <h3 className="text-zinc-500">Inquiry/Complaint:</h3>
                <h2 className="font-extrabold text-zinc-600">9667706012 <br></br>
                10.00AM to 7:00PM</h2>
                <h3 className="text-zinc-500">Any Other queries:</h3>
                <h2 className="font-extrabold text-zinc-600">9667706012 <br></br>
                10.00AM to 7:00PM</h2>

                <h2 className="font-extrabold text-zinc-600">Email:customercare@campusshoes.com</h2>

                <h2 className="font-extrabold text-zinc-600">For Bulk/B2B/Institutional/School Orders and <br>
                </br> Queries please reach out to Mr. Ashim Mahajan.</h2>
                <h3 className="text-zinc-500">Email:ashim.mahajan@campusshoes.com</h3>

              </div >

              <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="text-zinc-900 mb-3">Newsletter</h1>
              <p className="text-zinc-500 mb-3" >Sign up for exclusive offers, original stories,<br></br> upcoming events and more.</p>
              <input type="text" className="border  border-zinc-200 bg-white h-10 w-50 p-2" placeholder="Enter Email"/>
              <button className="bg-black text-white py-2 px-6 hover:bg-[#C16452] mt-2" >SIGN UP</button>
              <div className="text-zinc-600 mt-3 text-xl "><i className="ri-twitter-fill"></i> <i className="ri-facebook-box-fill"></i> <i className="ri-youtube-fill"></i> <i className="ri-instagram-line"></i></div>
              </div>

            </div>
          
          <div className="py-10 px-2">
            <h1 className="text-zinc-900 mb-3 text-ms">Popular Searches</h1>
            <p className="text-zinc-500">Men's footwear | Men's Running Shoes| Men's Walking Shoes| Men's Casual Shoes | Men's Sports shoes |Men's Walking Shoes | Men's Casual Shoes | Men's Sports shoes | Men's Sneakers | Men's Casual Sandals | Men's Sports Sandals | Men's Flip Flops & Slides | Men's Flip Flops Men's Slides
               Women's Footwear | Women's Running Shoes | Women's Casual Shoes | Women's Sports Shoes | Sneakers Women's Casual Sandal | Women's Sports Sandal | Women's Flip Flops & Slides Women's Flip Flops Women's Slides
               Kid's footwear | Kid's Running Shoes | Kid's Walking Shoes | Kid's Casual Shoes | Kid's School Shoes | Kid's Sports Shoes | Kid's Sandals & Floaters | Kid's Casual Sandals | Kid's Sports Sandals | Kid's Flip Flops & Slides | Kid's Flip Flops</p>
               <h6 className="text-zinc-500 text-xs mt-5">© 2024 Campus Shoes.</h6>
          </div>

        </div> 
    </div>
  )
}

export default Footer;
