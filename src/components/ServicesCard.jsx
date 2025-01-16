import { FaStar } from "react-icons/fa";
import { TbCurrencyPound } from "react-icons/tb";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { services } from "../Data/ServicesData";
import BookingDetails from "./BookingDetails";
const ServicesCard = () => {
  const [wishlist, setWishlist] = useState([]);
  const [service, setService] = useState({});
  const [serviceOpen, setServiceOpen] = useState(false);
  const toggleWishlist = (product) => {
    if (wishlist.find((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  const handleServiceOpen = (item) => {
    setService(item);
    setServiceOpen(true);
  };
  console.log(serviceOpen);

  return (
    <>
      <div
        className={`w-full h-full transition-all duration-300 ease-linear ${
          serviceOpen
            ? "block pointer-events-auto opacity-100 mt-0"
            : "hidden pointer-events-none opacity-0 mt-10"
        }`}
      >
        <BookingDetails
          onClose={() => setServiceOpen(false)}
          service={service}
        />
      </div>
      {services.length > 0 &&
        services.map((item) => (
          <div
            key={item.id}
            className="min-h-[350px] flex flex-col justify-between"
          >
            <div className="relative">
              <button
                onClick={() => toggleWishlist(item)}
                className={`  p-2 absolute top-2 right-2 rounded-full z-20 ${
                  isInWishlist(item.id)
                    ? "bg-red-500 text-white"
                    : "bg-white text-midnight"
                }`}
              >
                {isInWishlist(item.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
              <div className="absolute flex items-center justify-between gap-1 w-full px-2 bottom-2 z-20">
                <h6 className="text-xs text-text_primary font-medium font-lexend bg-white/80 py-[6px] rounded-full px-2 shadow">
                  Length:{item.length}
                </h6>
                <div className="text-sm text-text_primary flex items-center gap-1 bg-white/80 py-1 rounded-full px-2 shadow">
                  <FaStar />
                  <span>{item.ratings}</span>
                </div>
              </div>
              <div
                className="w-full h-[250px] overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => handleServiceOpen(item)}
              >
                <img
                  src={item.imgUrl}
                  alt="/"
                  className="w-full h-full object-cover rounded-2xl scale-100 hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-1">
              <div className="flex items-center justify-between gap-1">
                <h6
                  className="text-sm text-text_primary font-medium font-lexend"
                  onClick={() => handleServiceOpen(item)}
                >
                  {item.name}
                </h6>

                <div className="text-sm text-text_primary flex items-end font-medium ">
                  <TbCurrencyPound size={18} />
                  <span>{item.price}</span>
                </div>
              </div>
              <p className="text-text_secondary text-sm line-clamp-3 ">
                {item.description}
              </p>
              <button
                onClick={() => handleServiceOpen(item)}
                className="bg-midnight hover:bg-button_hover transition-all duration-150 ease-linear font-medium text-sm px-2 py-2 rounded-b-2xl text-white"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ServicesCard;
