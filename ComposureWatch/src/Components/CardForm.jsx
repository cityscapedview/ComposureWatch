import React, { useState } from "react";

const CardForm = (props) => {
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

  const submitHandler = (event) => {
    event.preventDefault();

    const charData = {
      name: enteredName,
      character: selectedCharacter,
      rank: selectedRank,
    };

    console.log(charData);

    props.onSaveCharData(charData);
    setEnteredName("Enter Player Name");
    setSelectedCharacter("Select Character");
    setSelectedRank("Select Rank");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center items-start gap-y-4 pb-12"
    >
      <div>
        <label>Name</label>
        <input
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          className="text-black block"
        />
      </div>
      <div>
        <label htmlFor="character-select">Character</label>
        <select
          name="character"
          id="character-select"
          className="text-black block"
          onChange={selectCharacterHandler}
        >
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
          <option value="Moira">Moira</option>
          <option value="zenyatta">Zenyatta</option>
        </select>
      </div>
      <div>
        <label htmlFor="ranking-select">Ranking</label>
        <select
          name="ranking"
          id="ranking-select"
          onChange={selectRankHandler}
          className="text-black block"
        >
          <option value="selector">{selectedRank}</option>
          <option value="grandMaster">Grand Master</option>
          <option value="master">Master</option>
          <option value="diamond">Diamond</option>
          <option value="platinum">Platinum</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
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
