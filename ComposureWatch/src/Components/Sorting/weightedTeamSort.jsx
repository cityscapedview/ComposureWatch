import React from "react";
import shuffle from "./shuffle";

const weightedTeamSort = (props) => {
  // Variables
  // TeamOne
  let teamOneSupport = [];
  let teamOneDPS = [];
  let teamOneTank = [];
  let teamTwoSupport = [];
  let teamTwoDPS = [];
  let teamTwoTank = [];
  let teamOne = [];
  let teamTwo = [];
  let teamOneComp = [teamOneSupport, teamOneDPS, teamOneTank];
  let teamTwoComp = [teamTwoSupport, teamTwoDPS, teamTwoTank];

  // Shuffle Players
  shuffle(props.info);

  //Randomly assign players to two teams
  for (let player of props.info) {
    teamTwo.length - teamOne.length >= 1
      ? teamOne.push(player)
      : teamTwo.push(player);
  }

  // Randomly assign roles into 6 objects
  const roleAssigner = (team, teamComp) => {
    for (let player of team) {
      let randomRole = Math.floor(Math.random() * 3);
      if (teamComp[randomRole].length < 2) {
        teamComp[randomRole].push(player);
      } else {
        const smallRole = teamComp.reduce((prev, next) =>
          prev.length > next.length ? next : prev
        );
        smallRole.push(player);
      }
    }
    return teamComp;
  };

  roleAssigner(teamOne, teamOneComp);
  roleAssigner(teamTwo, teamTwoComp);

  // weighted team average

  // if team averages are not equal resort

  //return data object

  let teamData = {
    teamOne: teamOneComp,
    teamTwo: teamTwoComp,
    teamOneLength: teamOne.length,
    teamTwoLength: teamTwo.length,
    // teamOneVal: teamOneVal,
    // teamTwoVal: teamTwoVal,
  };

  return teamData;
};

export default weightedTeamSort;
