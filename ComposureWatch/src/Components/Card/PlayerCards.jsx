import RankIcon from "./Icons/RankIcon";
import CharIcon from "./Icons/CharIcon";
import checkMark from "../../images/icons/checkMark.png";
import CheckmarkIcon from "../SVG/CheckMarkSvg";
import XmarkIcon from "../SVG/XMarkSvg";
import React, { useState } from "react";


const PlayerCards = ({ id, name, character, rank, onRemoveChangeHandler, team }) => {
  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    onRemoveChangeHandler(id);
  };

  let theme = {
    border: "border-[#2EF3FF]",
    shadow: "shadow-[#13336C]",
    background: "bg-[#0A0D30]",
    text: "text-[#2EF3FF]",
  };

  console.log(team);
  let teamOne;
  let teamTheme = (team) => {
    if (team === "teamOne") {
      return (theme = {
        border: "border-[#F5122A]",
        shadow: "shadow-[#250509]",
        background: "bg-[#250509]",
        text: "text-[#F5122A]",
      });
    } else {
      return theme;
    }
  };

  teamTheme(team);

  return (
    <li key={id} className="px-0">
      <div
        className={`border-4 ${theme.border} rounded-xl shadow-2xl ${theme.shadow} h-[227px] w-[175px] ${theme.background}`}
      >
        <div
          className={`border-2 ${theme.border} ${theme.background} rounded-lg h-[215px] w-[163px] m-0.5 flex flex-col justify-start items-center`}
        >
          <div
            className={`flex flex-col justify-start items-center border-2 bg-black ${theme.border} border-opacity-75 rounded-lg h-[185px] w-[155px] m-0.5 mb-12 ${theme.text} shadow-inner ${theme.shadow}`}
          >
            <div
              className={`rounded-full shadow-xl ${theme.shadow} mt-2 mx-8 mb-2`}
            >
              <CharIcon character={character} />
            </div>
            <h2 className="italic text-xl leading-10">{name}</h2>
            <RankIcon rank={rank} />
            {team === "cardPool" && (
              <button
                type="submit"
                onClick={clickHandler}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-1.5 mt-[-7px] border-[#2EF3FF] bg-[#0E3575] border-opacity-75 rounded-full border-[2px] cursor-pointer hover:bg-[#250509] hover:border-[#DD1929] hover:duration-150"
              >
                {/* Can't decide which checkmark looks better */}
                {/* {!visible && (
                <img src={checkMark} alt="checkmark" className="h-[18px]"></img>
              )} */}

              {!visible && <CheckmarkIcon />}
              {visible && <XmarkIcon />}
            </button>)
          </div>
        </div>
      </div>
    </li>
  );
};

export default PlayerCards;
