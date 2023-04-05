import RankIcon from "./RankIcon";
import CharIcon from "./CharIcon";

const PlayerCards = ({ name, character, rank }) => {
  return (
    <div className="p-8">
      <div className="border-4 border-[#2EF3FF]  rounded-xl shadow-2xl shadow-[#13336C] bg-[#0A0D30]">
        <div className="border-2 border-[#2EF3FF] bg-[#0A0D30] rounded-lg  m-0.5 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-center border-2 bg-black border-[#2EF3FF] border-opacity-75 rounded-lg px-20 py-6  m-0.5 mb-12 text-[#2EF3FF] shadow-inner shadow-[#13336C]">
            <div className="rounded-full shadow-xl shadow-[#13336C] m-0.5 mb-10">
              <CharIcon character={character} />
            </div>
            <h2 className="italic text-3xl leading-10">{name}</h2>
            <RankIcon rank={rank} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCards;
