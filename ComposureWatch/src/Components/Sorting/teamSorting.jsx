import shuffle from "./shuffle";

const teamSorting = (props) => {
  // Logic instructions:
  // Sort players by rating into two objects
  // Each Team cannot exceed six players
  // If there is a potential for closer team ratings, having an equal number of players on each team is not a priority.
  // Good luck  -Zen

  let teamOne = [];
  let teamTwo = [];
  let teamOneVal = 0;
  let teamTwoVal = 0;

  //Fischer-Yates shuffle aglorithm to randomize order each render.  This one is a famous shuffling method I did not create.  Props to the creators.

  shuffle(props.info);

  // Most Basic Test logic for testing purposes
  //Modify function to account for team rating difference
  // For example .5 diff max
  for (let player of props.info) {
    if (teamTwoVal + player.dpsRating >= teamOneVal) {
      teamOneVal += player.dpsRating;
      teamOne.push(player);
    } else {
      teamTwoVal += player.dpsRating;
      teamTwo.push(player);
    }
  }

  // Ensures that there is not more than a one player advantage
  if (teamTwo.length - teamOne.length >= 2) {
    teamTwoVal -= popPlayerTwo.rating;
    teamOneVal += popPlayerTwo.rating;
    teamOne.push(popPlayerTwo);
  } else if (teamOne.length - teamTwo.length >= 2) {
    let popPlayerOne = teamOne.pop();
    teamOneVal -= popPlayerOne.rating;
    teamTwoVal += popPlayerOne.rating;
    teamTwo.push(popPlayerOne);
  }

  // Ensures that teams do not exceed six players
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
  }

  let teamData = {
    teamOne: teamOne,
    teamTwo: teamTwo,
    teamOneLength: teamOne.length,
    teamTwoLength: teamTwo.length,
    teamOneVal: teamOneVal,
    teamTwoVal: teamTwoVal,
  };

  return teamData;
};
export default teamSorting;
