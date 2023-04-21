// To be determine if ranks will be part of the rank icon list or housed seperately here for values
import CardList from "../Card/CardList";

const SortingLogic = () => {
  let ranks = {
    bronze5: 0.5,
    bronze4: 0.55,
    bronze3: 0.6,
    bronze2: 0.65,
    bronze1: 0.7,
    silver5: 0.75,
    silver4: 0.8,
    silver3: 0.85,
    silver2: 0.9,
    silver1: 0.95,
    gold5: 1,
    gold4: 1.05,
    gold3: 1.1,
    gold2: 1.15,
    gold1: 1.2,
    platinum5: 1.25,
    platinum4: 1.3,
    platinum3: 1.35,
    platinum2: 1.4,
    platinum1: 1.45,
    diamond5: 1.5,
    diamond4: 1.55,
    diamond3: 1.6,
    diamond2: 1.65,
    diamond1: 1.7,
    master5: 1.75,
    master4: 1.8,
    master3: 1.85,
    master2: 1.9,
    master1: 1.95,
    grandMaster5: 2,
    grandMaster4: 2.05,
    grandMaster3: 2.1,
    grandMaster2: 2.15,
    grandMaster1: 2.2,
  };

  // Below is imported card example for logic to run
  const cards = [
    {
      id: 1,
      name: "Lightster",
      character: "reaper",
      rank: "gold",
      rating: 1,
    },
    {
      id: 2,
      name: "Mia",
      character: "hanzo",
      rank: "gold",
      rating: 1.05,
    },
    {
      id: 3,
      name: "Ollie",
      character: "junkrat",
      rank: "diamond",
      rating: 1.6,
    },
    {
      id: 4,
      name: "Zulu",
      character: "ana",
      rank: "diamond",
      rating: 1.65,
    },
    {
      id: 5,
      name: "Raihn",
      character: "reinhardt",
      rank: "silver",
      rating: 0.9,
    },
    {
      id: 6,
      name: "Ivysaur",
      character: "widowmaker",
      rank: "platinum",
      rating: 1.25,
    },
    {
      id: 7,
      name: "netbattler",
      character: "ana",
      rank: "gold",
      rating: 1.05,
    },
    {
      id: 8,
      name: "Zen",
      character: "moira",
      rank: "platinum",
      rating: 1.35,
    },
    {
      id: 9,
      name: "twenty7",
      character: "pharah",
      rank: "silver",
      rating: 0.95,
    },
    {
      id: 10,
      name: "Gizmo",
      character: "kiriko",
      rank: "platinum",
      rating: 1.45,
    },
    {
      id: 11,
      name: "Zen",
      character: "moira",
      rank: "platinum",
      rating: 2.35,
    },
    {
      id: 12,
      name: "twenty7",
      character: "pharah",
      rank: "silver",
      rating: 1.95,
    },
  ];

  // Logic instructions:
  // Randomize ids for new teams with same players on "kumite" button press.
  // Sort players by rating into two objects
  // Each Team cannot exceed six players
  // If there is a potential for closer team ratings, having an equal number of players on each team is not a priority.
  // Good luck  -Zen

  let teamOne = [];
  let teamTwo = [];
  let teamOneVal = 0;
  let teamTwoVal = 0;

  // Most Basic Test logic for testing purposes
  for (let player of cards) {
    if (teamTwoVal + player.rating >= teamOneVal) {
      teamOneVal += player.rating;
      teamOne.push(player);
    } else {
      teamTwoVal += player.rating;
      teamTwo.push(player);
    }
  }

  let teamOneLength = teamOne.length;
  let teamTwoLength = teamTwo.length;

  // Maxes out the amount of players on one team
  // refactor below into a function for DRY

  if (teamOne.length > 6) {
    let popPlayerOne = teamOne.pop();
    teamTwo.push(popPlayerOne);
  } else if (teamTwo.length > 6) {
    let popPlayerTwo = teamOne.pop();
    teamOne.push(popPlayerTwo);
  }

  return (
    <div>
      <CardList info={teamOne} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-red-600  text-4xl">
          <p>Team One Value: {teamOneVal}</p>
          <p>Players: {teamOneLength}</p>
        </div>
        <div className="text-white font-bold italic text-8xl py-8">VS</div>
        <div className="text-blue-600  text-4xl">
          <p>Team Two Value: {teamTwoVal}</p>
          <p>Players: {teamTwoLength}</p>
        </div>
      </div>
      <CardList info={teamTwo} />
    </div>
  );
};
export default SortingLogic;
