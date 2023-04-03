const TitleSection = () => {
  return (
    <div>
      <div
        id="video-container"
        className="z-[-1] absolute top-0 left-0 right-0 bottom-0 overflow-hidden min-h-[666px]"
      >
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="src/video/zenHighlight.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-opacity-25 text-white gap-y-8 uppercase flex flex-col justify-center items-center h-[90.35vh]">
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
