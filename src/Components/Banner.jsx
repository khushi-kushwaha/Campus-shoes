import { useState } from "react"

const Banner = () => {

   const image = [
    "https://www.campusshoes.com/cdn/shop/files/Festive_Sale_Desktop_Banner_1512x.webp?v=1728997158",
    "https://www.campusshoes.com/cdn/shop/files/Artboard_1_aabb7f86-be6a-45ba-ab1c-7d22b5f6c8d4_1512x.webp?v=1729162303",
    "https://www.campusshoes.com/cdn/shop/files/Image_1512x.png?v=1728997329",
    "https://www.campusshoes.com/cdn/shop/files/Artboard_1_a1f2fe03-1522-49d7-b012-e2628f5547f1_1512x.webp?v=1729162871",
    "https://www.campusshoes.com/cdn/shop/files/Artboard_1_d46eda68-b30a-48a2-afba-4d1b221f35c6_1512x.webp?v=1729752021",
   ]
   

   const [currentImageIndex, setcurrentImageIndex] = useState(0)

   const previmage = () => {
    setcurrentImageIndex((Index) => 
      (Index - 1 + image.length) % image.length
    );
  };
  
   
  const nextimage = () => {
    setcurrentImageIndex((Index) => (Index + 1) % image.length);
  };
  

  return (
    <div>
        <div
        style={{
          backgroundImage: `url(${image[currentImageIndex]})`,
        }}
        className="bg-cover bg-center h-[450px] flex justify-between items-center"
      >
        <button onClick={previmage} className="text-white text-6xl"><i className="ri-arrow-left-wide-line"></i></button>
        <button onClick={nextimage} className="text-white text-6xl"><i className="ri-arrow-right-wide-line"></i></button>
      </div>
    </div>
  )
}

export default Banner