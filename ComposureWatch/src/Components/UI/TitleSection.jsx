import backVideo from "../../video/zenHighlight.mp4";

const TitleSection = () => {
  return (
    <div className="h-[90vh] min-h-[600px] max-h-[1000px] flex flex-col justify-center items-center relative">
      <div className="video-container align-middle w-full h-full absolute top-0 z-[-1]">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src={backVideo} type="video/mp4" />
        </video>
      </div>
      <div className="bg-opacity-25 text-white gap-y-8 uppercase flex flex-col justify-center items-center z-[5]">
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
