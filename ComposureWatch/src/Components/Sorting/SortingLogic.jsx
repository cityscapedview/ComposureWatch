// To be determine if ranks will be part of the rank icon list or housed seperately here for values
import CardList from "../Card/CardList";

const SortingLogic = (cards) => {
  console.log(cards);

  // Below is imported card example for logic to run
  // const cards = [
  //   {
  //     id: 1,
  //     name: "Lightster",
  //     character: "reaper",
  //     rank: "gold3",
  //     rating: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Mia",
  //     character: "hanzo",
  //     rank: "gold3",
  //     rating: 1.05,
  //   },
  //   {
  //     id: 3,
  //     name: "Ollie",
  //     character: "junkrat",
  //     rank: "diamond3",
  //     rating: 1.6,
  //   },
  //   {
  //     id: 4,
  //     name: "Zulu",
  //     character: "ana",
  //     rank: "diamond3",
  //     rating: 1.65,
  //   },
  //   {
  //     id: 5,
  //     name: "Raihn",
  //     character: "reinhardt3",
  //     rank: "silver3",
  //     rating: 0.9,
  //   },
  //   {
  //     id: 6,
  //     name: "Ivysaur",
  //     character: "widowmaker",
  //     rank: "platinum3",
  //     rating: 1.25,
  //   },
  //   {
  //     id: 7,
  //     name: "netbattler",
  //     character: "ana",
  //     rank: "gold3",
  //     rating: 1.05,
  //   },
  //   {
  //     id: 8,
  //     name: "Zen",
  //     character: "moira",
  //     rank: "platinum3",
  //     rating: 1.35,
  //   },
  //   {
  //     id: 9,
  //     name: "twenty7",
  //     character: "pharah",
  //     rank: "silver3",
  //     rating: 0.95,
  //   },
  //   {
  //     id: 10,
  //     name: "flockwood",
  //     character: "zenyatta",
  //     rank: "platinum3",
  //     rating: 1.35,
  //   },
  // ];

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

  //Fischer-Yates shuffle aglorithm to randomize order each render.  This one is a famous shuffling method I did not create.  Props to the creators.

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // shuffle(cards);

  // Most Basic Test logic for testing purposes
  //Modify function to account for team rating difference
  // For example .5 diff max
  for (let player of cards) {
    if (teamTwoVal + player.rating >= teamOneVal) {
      teamOneVal += player.rating;
      teamOne.push(player);
    } else {
      teamTwoVal += player.rating;
      teamTwo.push(player);
    }
  }

  // Maxes out the amount of players on one team
  // refactor below into a function for DRY

  if (teamOne.length > 6) {
    let popPlayerOne = teamOne.pop();
    teamOneVal -= popPlayerOne.rating;
    teamTwoVal += popPlayerOne.rating;
    teamTwo.push(popPlayerOne);
  } else if (teamTwo.length > 6) {
    let popPlayerTwo = teamOne.pop();
    teamTwoVal -= popPlayerTwo.rating;
    teamOneVal += popPlayerTwo.rating;
    teamOne.push(popPlayerTwo);
  } else if (teamTwo.length - teamOne.length >= 2) {
    teamTwoVal -= popPlayerTwo.rating;
    teamOneVal += popPlayerTwo.rating;
    teamOne.push(popPlayerTwo);
  } else if (teamOne.length - teamTwo.length >= 2) {
    let popPlayerOne = teamOne.pop();
    teamOneVal -= popPlayerOne.rating;
    teamTwoVal += popPlayerOne.rating;
    teamTwo.push(popPlayerOne);
  }

  let teamOneLength = teamOne.length;
  let teamTwoLength = teamTwo.length;

  return (
    <div>
      <CardList info={teamOne} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-red-600  text-4xl">
          <p>Team One Value: {teamOneVal.toFixed(2)}</p>
          <p>Players: {teamOneLength}</p>
        </div>
        <div className="text-white font-bold italic text-8xl py-8">VS</div>
        <div className="text-blue-600  text-4xl">
          <p>Team Two Value: {teamTwoVal.toFixed(2)}</p>
          <p>Players: {teamTwoLength}</p>
        </div>
      </div>
      <CardList info={teamTwo} />
    </div>
  );
};
export default SortingLogic;
