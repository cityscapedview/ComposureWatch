const PlayerCards = (props) => {
  let charImg;
  if (props.character == "Moira") {
    charImg = "src/IMG/portrait-moira.png";
  } else {
    charImg = <h1>No Character Image Available.</h1>;
  }

  return (
    <div className="bg-black p-8">
      <div className="border-4 border-[#2EF3FF]  rounded-xl shadow-2xl shadow-[#13336C] bg-[#0A0D30]">
        <div className="border-2 border-[#2EF3FF] bg-[#0A0D30] rounded-lg  m-0.5 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-center border-2 bg-black border-[#2EF3FF] border-opacity-75 rounded-lg px-20 py-6  m-0.5 mb-12 text-[#2EF3FF] shadow-inner shadow-[#13336C]">
            <div className="rounded-xl shadow-xl shadow-[#13336C] m-0.5 mb-10">
              <img
                src={charImg}
                alt="character portrait"
                className="border-2 border-black rounded-xl shadow-2xl shadow-[#13336C]"
              />
            </div>
            {/* <p>{props.character}</p> */}
            <h2 className="italic text-3xl leading-10">{props.name}</h2>
            {/* <div>{cardImg}</div> */}
            <h3 className="text-white">{props.rank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCards;
