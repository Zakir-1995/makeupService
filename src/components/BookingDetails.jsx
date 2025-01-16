import { FaStar } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
/* eslint-disable react/prop-types */
const BookingDetails = ({ service, onClose }) => {
  return (
    <div
      className="fixed  bg-midnight cursor-pointer  w-full h-full z-50 inset-0 flex justify-center items-center "
      onClick={() => onClose()}
    >
      <div
        className="bg-white md:w-[80%] w-[90%] h-[90vh] rounded-2xl p-5 shadow cursor-auto  relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute left-10 top-5 text-2xl cursor-pointer z-40"
          onClick={() => onClose()}
        >
          <IoArrowBackCircle />
        </button>
        <div className="bg-paste/10 w-96 h-96 rounded-full absolute top-[50%] left-0  -translate-y-[50%] z-10 blur-3xl "></div>
        <div className=" grid lg:grid-cols-12 grid-cols-1 overflow-y-scroll scrollbar_none h-full w-full p-5  relative z-30 ">
          <div className="lg:col-span-7 col-span-12 lg:order-1 order-2 lg:pr-10 pr-0 h-full w-full mt-32 sm:mt-10">
            <div className="">
              <h4 className="md:text-3xl sm:text-2xl text-xl font-medium font-lexend">
                Want to book?
              </h4>
              <form className="mt-2 flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="w-fit md:text-base text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jhon Doe"
                    className="bg-paste/5 md:py-[10px] py-2 md:placeholder:text-base placeholder:text-sm px-3 rounded-xl border-paste/5 border-2 focus:outline-none focus:bg-transparent focus:border-paste focus:border-2"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="w-fit md:text-base text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="foobar@gmail.com"
                    className="bg-paste/5 md:py-[10px] py-2 md:placeholder:text-base placeholder:text-sm px-3 rounded-xl border-paste/5 border-2 focus:outline-none focus:bg-transparent focus:border-paste focus:border-2"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="w-fit md:text-base text-sm">
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    placeholder="+1(800) 123-4567"
                    className="bg-paste/5 md:py-[10px] py-2 md:placeholder:text-base placeholder:text-sm px-3 rounded-xl border-paste/5 border-2 focus:outline-none focus:bg-transparent focus:border-paste focus:border-2"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="w-fit md:text-base text-sm">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    placeholder=""
                    className="bg-paste/5 md:py-[10px] py-2 md:placeholder:text-base placeholder:text-sm px-3 rounded-xl border-paste/5 border-2 focus:outline-none focus:bg-transparent focus:border-paste focus:border-2"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="time" className="w-fit md:text-base text-sm">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    placeholder="10.00"
                    className="bg-paste/5 md:py-[10px] py-2 md:placeholder:text-base placeholder:text-sm px-3 rounded-xl border-paste/5 border-2 focus:outline-none focus:bg-transparent focus:border-paste focus:border-2"
                    required
                  />
                </div>
                <button
                  className="bg-midnight px-6 md:py-3 py-2 text-sm md:text-base hover:bg-button_hover rounded-full text-white transition-all duration-150 ease-linear my-3"
                  type="submit"
                >
                  {" "}
                  Book Now
                </button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 lg:order-2 order-1 h-full ">
            <div className="  flex flex-col justify-center items-center w-full max-h-[50vh] h-full  rounded-2xl bg-midnight/20  ">
              <img
                src={service.imgUrl}
                alt="/"
                className="w-full h-full object-cover rounded-2xl -mt-5 mr-5 shadow-xl"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium text-midnight font-lexend ">
                {service.name}
              </h3>
              <span className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold text-midnight bg-paste/5 shadow px-2 py-1 rounded-2xl">
                {"£"}
                {service.price}
              </span>
            </div>

            <p className="text-sm text-text_secondary py-3">
              {service.description}
            </p>
            <div className="flex items-center justify-between gap-2 m-2">
              <span className="text-sm font-medium text-text_primary bg-paste/5 shadow rounded-2xl px-2 py-1">
                Length:{service.length}
              </span>
              <span className="text-sm font-medium text-text_primary bg-paste/5 shadow rounded-2xl px-2 py-1 flex items-center gap-1">
                <FaStar />
                {service.ratings}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
