const PlayerCards = (props) => {
  if (props.name == "moira") {
    return (cardImg = <img src="src/IMG/portrait-moira.png" />);
  }

  return (
    <div className="border-4 border-[#2EF3FF] bg-[#010206] rounded-lg ">
      <div className="border-2 border-[#2EF3FF] h-96 w-72 rounded-lg flex flex-col justify-center items-center m-1">
        <p>{props.name}</p>
        {/* <div>{cardImg}</div> */}
        <p>{props.character}</p>
        <p>{props.rank}</p>
      </div>
    </div>
  );
};

export default PlayerCards;
