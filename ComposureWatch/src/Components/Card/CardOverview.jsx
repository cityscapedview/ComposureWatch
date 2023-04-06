import doomfist from "../../images/UI/Doomfist.png";

const CardOverview = () => {
  return (
    <div className="bg-gradient-to-tr from-[#AE1518] via-[#8C1114] to-[#5B0B0E] flex justify-center">
      <div className="flex flex-row justify-center items-start  text-white py-14 px-12 gap-x-12 max-w-7xl">
        <div>
          <img src={doomfist} alt="Doomfist" className="rounded" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-6xl font-bold uppercase mb-6">Card Overview</h2>
          <p className="mb-6">
            Experience the first major collaboration in Overwatch 2! Punch your
            way through new challenges to unlock free One-Punch Man themed
            rewards including a Legendary Mumen Rider- Soldier 76 skin, and
            collect the other themed skins like Saitama &#x2013; Doomfist, Genos
            &#x2013; Genji, and Terrible Tornado &#x2013; Kiriko.
          </p>
          <div className="flex flex-row gap-x-4">
            <button className="bg-orange-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100">
              Try now
            </button>
            <button className="bg-white text-black w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
