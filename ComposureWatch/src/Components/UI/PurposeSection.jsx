import kiriko from "../../images/UI/Kiriko.jpg";

const PurposeSection = () => {
  return (
    <div className="from-[#66c4ff] bg-gradient-to-tr via-[#33b1ff]to-[#009dff] flex justify-center">
      <div className="flex flex-row justify-center items-start  font-[rgb(29, 37, 58)] py-14 px-12 gap-x-12 max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="text-6xl font-bold uppercase">A NEW ERA HAS BEGUN</h2>
          <p className="mt-6">
            ComposureWatch is a free-to-use, team-based tool made to ensure
            balance amongst team creation in internal games. Nothing should get
            in the way of a good gaming session, especially when playing with
            friends.
          </p>
        </div>
        <div>
          <img src={kiriko} alt="Kiriko Image" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
