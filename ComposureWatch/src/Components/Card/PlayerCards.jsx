import RankIcon from "./Icons/RankIcon";
import CharIcon from "./Icons/CharIcon";
import checkMark from "../../images/icons/checkMark.png";

const PlayerCards = ({ id, name, character, rank }) => {
  return (
    <li key={id} className="px-0">
      <div className="border-4 border-[#2EF3FF]  rounded-xl shadow-2xl shadow-[#13336C] h-[227px] w-[175px] bg-[#0A0D30]">
        <div className="border-2 border-[#2EF3FF] bg-[#0A0D30] rounded-lg h-[215px] w-[163px] m-0.5 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-center border-2 bg-black border-[#2EF3FF] border-opacity-75 rounded-lg h-[185px] w-[155px] m-0.5 mb-12 text-[#2EF3FF] shadow-inner shadow-[#13336C]">
            <div className="rounded-full shadow-xl shadow-[#13336C] mt-2 mx-8 mb-2">
              <CharIcon character={character} />
            </div>
            <h2 className="italic text-xl leading-10">{name}</h2>
            <RankIcon rank={rank} />
            <img
              src={checkMark}
              alt="checkmark"
              className="h-[18px] border-[#2EF3FF] border-opacity-75 rounded-lg border-2 cursor-pointer"
            ></img>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PlayerCards;
