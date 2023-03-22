import React, { useState } from "react";

const CardForm = () => {
  const [enteredName, setEnteredName] = useState("Enter Player Name");

  const [selectedCharacter, setSelectedCharacter] =
    useState("Select Character");

  const [selectedRank, setSelectedRank] = useState("Select Rank");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(selectedRank);
  };

  const selectCharacterHandler = (event) => {
    setSelectedCharacter(event.target.value);
    console.log(selectedCharacter);
  };

  const selectRankHandler = (event) => {
    setSelectedRank(event.target.value);
    console.log(selectedRank);
  };

  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          className="text-black"
        />
      </div>
      <div>
        <label htmlFor="character-select">Character</label>
        <select name="character" id="character-select" className="text-black">
          <option value="selector">{selectedCharacter}</option>
          <option value="dVa">D.Va</option>
          <option value="doomfist">Doomfist</option>
          <option value="junkerQueen">JunkerQueen</option>
          <option value="orisa">Orisa</option>
          <option value="ramattra">Ramattra</option>
          <option value="reinhardt">Reinhardt</option>
          <option value="roadhog">Roadhog</option>
          <option value="sigma">Sigma</option>
          <option value="winston">Winston</option>
          <option value="wreckingBall">Wrecking Ball</option>
          <option value="zarya">Zarya</option>
          <option value="ashe">Ashe</option>
          <option value="bastion">Bastion</option>
          <option value="cassidy">Cassidy</option>
          <option value="echo">Echo</option>
          <option value="genji">Genji</option>
          <option value="hanzo">Hanzo</option>
          <option value="junkrat">Junkrat</option>
          <option value="mei">Mei</option>
          <option value="paharah">Pharah</option>
          <option value="reaper">Reaper</option>
          <option value="sojourn">Sojourn</option>
          <option value="soldier76">Soldier76</option>
          <option value="sombra">Sombra</option>
          <option value="symmetra">Symmetra</option>
          <option value="torbjorn">Torbjorn</option>
          <option value="tracer">Tracer</option>
          <option value="widowmaker">Widowmaker</option>
          <option value="ana">Ana</option>
          <option value="baptiste">Baptiste</option>
          <option value="brigitte">Brigitte</option>
          <option value="kiriko">Kiriko</option>
          <option value="lucio">Lucio</option>
          <option value="moira">Moira</option>
          <option value="zenyatta">Zenyatta</option>
        </select>
        <label htmlFor="ranking-select">Ranking</label>
        <select name="ranking" id="ranking-select" className="text-black">
          <option value="selector">{selectedRank}</option>
          <option value="7">Grand Master</option>
          <option value="6">Diamond</option>
          <option value="5">Platinum</option>
          <option value="4">Gold</option>
          <option value="3">Silver</option>
          <option value="2">Bronze</option>
          <option value="1">Wood</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-orange-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100"
      >
        Create New Player
      </button>
    </form>
  );
};

export default CardForm;
