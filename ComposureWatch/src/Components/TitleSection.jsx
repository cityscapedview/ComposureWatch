const TitleSection = () => {
  return (
    <div className="bg-purple-800 flex flex-col justify-center items-center gap-y-4 uppercase text-white py-80 px-40">
      <h2 className="text-3xl font-bold">ComposureWatch</h2>
      <h3 className="text-3xl italic">A team composition worth fighting for</h3>
      <p>Team-Based planning &#x2022; free to use</p>
      <button className="bg-orange-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100">
        Try now
      </button>
    </div>
  );
};

export default TitleSection;
