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
  ];

  // Logic instructions:

  // Filtering for rating

  let team1 = [];
  let team2 = [];
  let team1Val = 0;
  let team2Val = 0;

  // Most Basic Test logic for testing purposes
  for (let player of cards) {
    if (team2Val + player.rating >= team1Val) {
      team1Val += player.rating;
      team1.push(player);
    } else {
      team2Val += player.rating;
      team2.push(player);
    }
  }

  return (
    <div>
      <CardList info={team1} />
      <p>VS</p>
      <CardList info={team2} />
    </div>
  );
};
export default SortingLogic;
