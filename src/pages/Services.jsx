import ServicesCard from "../components/ServicesCard";
const Services = () => {
  return (
    <div className="max-w-7xl mx-auto mt-24 pt-5 pb-20 px-4">
      <div className="bg-paste/10 w-96 h-96 rounded-full fixed top-[50%] left-0  -translate-y-[50%] -z-50 blur-3xl "></div>
      <div className="bg-paste/10 w-64 h-64 rounded-full fixed top-[50%] right-0  -translate-y-[50%] -z-50 blur-3xl "></div>
      <div className="flex flex-col justify-center items-center py-20">
        <h5 className="md:text-3xl sm:text-2xl text-xl font-gochi_hand text-text_secondary">
          Enhance Your Beauty
        </h5>
        <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-lexend text-text_primary font-semibold relative after:absolute after:inset-0  after:bg-midnight after:w-40 after:h-[2px] after:left-[50%] after:-translate-x-[50%] md:after:top-16 after:top-12 after:rounded-full ">
          Explore Our Services
        </h3>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
