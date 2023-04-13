import doomfist from "../../images/UI/Doomfist.png";
import Zcontentgrid from "./ZGridComponent/Zcontentgrid";
import Zgridright from "./ZGridComponent/Zgridright";
import Zheader from "./ZGridComponent/Zheader";
import Zcontent from "./ZGridComponent/Zcontent";
import Zimage from "./ZGridComponent/Zimage";

const Overview = () => {
  let header = "Card Overview";
  let content =
    "Experience the first major collaboration in Overwatch 2! Punch your way through new challenges to unlock free One-Punch Man themed rewards including a Legendary Mumen Rider- Soldier 76 skin, and collect the other themed skins like Saitama &#x2013; Doomfist, Genos &#x2013; Genji, and Terrible Tornado &#x2013; Kiriko.";
  let alt = "Doomfist Image";
  return (
    <div className="bg-gradient-to-tr from-[#AE1518] via-[#8C1114] to-[#5B0B0E] flex justify-center">
      <Zgridright>
        <Zimage img={doomfist} alt={alt} />
        <Zcontentgrid>
          <Zheader header={header} />
          <Zcontent content={content} />
          <div className="flex align-center justify-center gap-x-6 pt-8">
            <button className="bg-orange-600 w-30 h-15 px-10 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100">
              Try now
            </button>
            <button className="bg-white text-black w-30 h-15 px-10 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100">
              Learn More
            </button>
          </div>
        </Zcontentgrid>
      </Zgridright>
    </div>
  );
};

export default Overview;
