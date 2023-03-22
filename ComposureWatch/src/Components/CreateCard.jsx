const CreateCard = () => {
  return (
    <div className="bg-gradient-to-t from-[#009dff]  via-[#33b1ff] to-[#66c4ff] flex flex-col justify-center items-center gap-y-4 uppercase text-white py-80 px-40">
      <h2 className="text-3xl font-bold">Create Player Card</h2>
      <p>Enter player information below</p>
      <button className="bg-orange-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100">
        Try now
      </button>
    </div>
  );
};

export default CreateCard;
