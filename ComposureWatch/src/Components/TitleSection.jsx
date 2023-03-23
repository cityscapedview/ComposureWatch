const TitleSection = () => {
  return (
    <div>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="absolute z-[-10] w-auto 
              min-w-full min-h-full max-w-none"
        >
          <source src="src/video/zenHighlight.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-[#66c4ff] bg-opacity-25 text-white p-80 gap-y-8 uppercaseflex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">ComposureWatch</h2>
        <h3 className="text-3xl italic pb-2">
          A team composition worth fighting for
        </h3>
        <p>Team-Based planning &#x2022; free to use</p>
        <button className="bg-orange-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100">
          Try now
        </button>
      </div>
    </div>
  );
};

export default TitleSection;
