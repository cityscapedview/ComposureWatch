import kiriko from "../../images/UI/Kiriko.jpg";
import Zcontentgrid from "./ZGridComponent/Zcontentgrid";
import Zgrid from "./ZGridComponent/Zgrid";
import Zheader from "./ZGridComponent/Zheader";

const PurposeSection = () => {
  let header = "A NEW ERA HAS BEGUN";
  let content =
    "ComposureWatch is a free-to-use, team-based tool made to ensure balance amongst team creation in internal games. Nothing should get in the way of a good gaming session, especially when playing with friends. Lorem ipsum dolor sit amet consectetur, adipisicing elit.";

  return (
    <div className="from-[#66c4ff] bg-gradient-to-tr via-[#33b1ff]to-[#009dff] flex items-center justify-center">
      <Zgrid>
        <Zcontentgrid>
          <Zheader header={header} />
          <p className="mt-6 font-base sm:text-xl">
            ComposureWatch is a free-to-use, team-based tool made to ensure
            balance amongst team creation in internal games. Nothing should get
            in the way of a good gaming session, especially when playing with
            friends. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </Zcontentgrid>
        <div className="self-start">
          <img src={kiriko} alt="Kiriko Image" className="rounded" />
        </div>
      </Zgrid>
    </div>
  );
};

export default PurposeSection;
