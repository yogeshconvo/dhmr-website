import outcomeImg from "../../assets/global/Banner.jpg";
import FloatingButtons from "../../components/FloatingButtons";

const HeroGlobal = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={outcomeImg}
        alt="Outcome Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-auto md:top-0 bottom-0 w-full h-1/2 md:h-full z-10 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Text Section */}
      <div
        className="absolute top-auto bottom-12 sm:top-1/2 sm:bottom-auto sm:transform sm:-translate-y-1/2
  left-0
  px-4 sm:px-6 sm:pl-20
  text-white
  max-w-full
  w-auto
  sm:w-1/2
  text-left
  z-20"
      >
        <h1 className="md:text-[42px] text-[35px] md:mt-10 md:ml:10 font-oswald-medium font-[500] leading-tight max-w-[96%] lg:max-w-[550px] tracking-wide text-left">
          A VIBRANT ECOSYSTEM OF PARTNERSHIPS,{" "}
          <span className="text-[#E1CD67] font-[600]">
            LEARNING OPPORTUNITIES, AND CULTURAL EXCHANGE
          </span>
        </h1>
        <p>DMIHER Global</p>
      </div>
      <FloatingButtons />
    </div>
  );
};

export default HeroGlobal;
