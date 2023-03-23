const PlayerCards = (props) => {
  if (props.name == "moira") {
    return (cardImg = <img src="src/IMG/portrait-moira.png" />);
  }

  return (
    <div className="bg-black p-8">
      <div className="border-4 border-[#2EF3FF]  rounded-xl shadow-2xl shadow-[#13336C] bg-[#0A0D30]">
        <div className="border-2 border-[#2EF3FF] bg-[#0A0D30] h-96 w-72 rounded-lg  m-0.5 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-center items-center border-2 bg-black border-[#2EF3FF] border-opacity-75 rounded-lg px-24 py-32 m-0.5 text-[#2EF3FF] shadow-inner shadow-[#13336C]">
            <p>{props.character}</p>
            <p className="italic">{props.name}</p>
            {/* <div>{cardImg}</div> */}
            <p>{props.rank}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCards;
