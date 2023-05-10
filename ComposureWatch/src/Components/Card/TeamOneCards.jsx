import RankIcon from "./Icons/RankIcon";
import CharIcon from "./Icons/CharIcon";
import React, { useState } from "react";

const TeamOneCards = ({
  id,
  name,
  character,
  rank,
  cardRemoveChangeHandler,
}) => {
  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    const enteredId = id;
    cardRemoveChangeHandler(enteredId);
  };

  // bg-[#250509] border-[#DD1929]

  return (
    <li key={id} className="px-0">
      <div className="border-4 border-[#F5122A]  rounded-xl shadow-2xl shadow-[#250509] h-[227px] w-[175px] bg-[#250509]">
        <div className="border-2 border-[#F5122A] bg-[#250509] rounded-lg h-[215px] w-[163px] m-0.5 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-center border-2 bg-black border-[#F5122A] border-opacity-75 rounded-lg h-[185px] w-[155px] m-0.5 mb-12 text-[#F5122A] shadow-inner shadow-[#250509]">
            <div className="rounded-full shadow-xl shadow-[#47030E] mt-2 mx-8 mb-2">
              <CharIcon character={character} />
            </div>
            <h2 className="italic text-xl leading-10">{name}</h2>
            <RankIcon rank={rank} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default TeamOneCards;
