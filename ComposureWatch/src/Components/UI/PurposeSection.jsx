import kiriko from "../../images/UI/Kiriko.jpg";

const PurposeSection = () => {
  return (
    <div className="from-[#66c4ff] bg-gradient-to-tr via-[#33b1ff]to-[#009dff] flex items-center justify-center">
      <div
        className="grid grid-cols-1 md:grid-cols-[40fr,60fr] 
      gap-x-20 max-[1200px]:gap-x-10 sm:gap-y-8 gap-y-6 px-4 py-10 sm:px-6 sm:py-16 md:px-10 md:py-20
      justify-items-center items-center  font-[rgb(29, 37, 58)] max-w-[1600px]"
      >
        <div className="flex justify-center">
          <div className="grid grid-cols-1 justify-items-center content-center text-center max-w-[650px]  md:text-left">
            <h2 className="text-4xl sm:text-6xl font-bold uppercase">
              A NEW ERA HAS BEGUN
            </h2>
            <p className="mt-6 font-base sm:text-xl">
              ComposureWatch is a free-to-use, team-based tool made to ensure
              balance amongst team creation in internal games. Nothing should
              get in the way of a good gaming session, especially when playing
              with friends. 
            </p>
          </div>
        </div>
        <div className="self-start">
          <img src={kiriko} alt="Kiriko Image" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
