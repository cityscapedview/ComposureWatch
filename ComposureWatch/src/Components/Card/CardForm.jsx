import React, { useState } from "react";
import ratingSort from "../Sorting/ratingSort";

const CardForm = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const [selectedCharacter, setSelectedCharacter] =
    useState("Select Character");

  const [selectedTankRank, setSelectedTankRank] = useState("Select Rank");
  const [selectedDPSRank, setSelectedDPSRank] = useState("Select Rank");
  const [selectedSupportRank, setSelectedSupportRank] = useState("Select Rank");

  const [count, setCount] = useState(0);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const selectCharacterHandler = (event) => {
    setSelectedCharacter(event.target.value);
  };

  const selectTankRankHandler = (event) => {
    setSelectedTankRank(event.target.value);
  };
  const selectDPSRankHandler = (event) => {
    setSelectedDPSRank(event.target.value);
  };
  const selectSupportRankHandler = (event) => {
    setSelectedSupportRank(event.target.value);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const chosenTankRank = selectedTankRank;
    const chosenDPSRank = selectedDPSRank;
    const chosenSupportRank = selectedSupportRank;
    const foundTankRating = ratingSort(chosenTankRank);
    const foundDPSRating = ratingSort(chosenDPSRank);
    const foundSupportRating = ratingSort(chosenSupportRank);

    const charData = {
      id: count,
      name: enteredName,
      character: selectedCharacter,
      tankRank: selectedTankRank,
      dpsRank: selectedDPSRank,
      supportRank: selectedSupportRank,
      tankRating: foundTankRating,
      dpsRating: foundDPSRating,
      supportRating: foundSupportRating,
    };

    props.onSaveCharData(charData);
    setEnteredName("");
    setSelectedCharacter("Select Character");
    setSelectedTankRank("Select Rank");
    setSelectedDPSRank("Select Rank");
    setSelectedSupportRank("Select Rank");
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
          placeholder="Enter Player Name"
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
          value={selectedCharacter}
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
          <option value="pharah">Pharah</option>
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
          <option value="lifeweaver">Lifeweaver</option>
          <option value="lucio">Lucio</option>
          <option value="mercy">Mercy</option>
          <option value="moira">Moira</option>
          <option value="zenyatta">Zenyatta</option>
        </select>
      </div>
      <div>
        <label htmlFor="ranking-select">Tank Ranking</label>
        <select
          name="ranking"
          id="ranking-select"
          value={selectedTankRank}
          onChange={selectTankRankHandler}
          className="text-black block"
        >
          <option value="selector">{selectedTankRank}</option>
          <option value="grandMaster">Grand Master</option>
          <option value="master">Master</option>
          <option value="diamond">Diamond</option>
          <option value="platinum">Platinum </option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
        </select>
      </div>
      <div>
        <label htmlFor="ranking-select">DPS Ranking</label>
        <select
          name="ranking"
          id="ranking-select"
          value={selectedDPSRank}
          onChange={selectDPSRankHandler}
          className="text-black block"
        >
          <option value="selector">{selectedDPSRank}</option>
          <option value="grandMaster">Grand Master</option>
          <option value="master">Master</option>
          <option value="diamond">Diamond</option>
          <option value="platinum">Platinum </option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
        </select>
      </div>
      <div>
        <label htmlFor="ranking-select">Support Ranking</label>
        <select
          name="ranking"
          id="ranking-select"
          value={selectedSupportRank}
          onChange={selectSupportRankHandler}
          className="text-black block"
        >
          <option value="selector">{selectedSupportRank}</option>
          <option value="grandMaster">Grand Master</option>
          <option value="master">Master</option>
          <option value="diamond">Diamond</option>
          <option value="platinum">Platinum </option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={handleClick}
        className="bg-orange-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:opacity-100"
      >
        Create New Player
      </button>
    </form>
  );
};

export default CardForm;
