import React from "react";
import shuffle from "./shuffle";

const weightedTeamSort = (props) => {
  const weightSort = (props) => {
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
    let teamOneVal = 0;
    let teamTwoVal = 0;
    let teamOneComp = [teamOneSupport, teamOneDPS, teamOneTank];
    let teamTwoComp = [teamTwoSupport, teamTwoDPS, teamTwoTank];

    // do {
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
    // Determines rating of each team role
    const roleValue = (teamRole, rating) => {
      let roleRating = 0;
      for (let player of teamRole) {
        roleRating += player[rating];
      }
      return roleRating;
    };

    // weights the roles to return overall team value

    const teamRating = (teamSupport, teamDps, teamTank) => {
      let weightedSupport = roleValue(teamSupport, "supportRating") * 0.3;
      let weightedTank = roleValue(teamTank, "tankRating") * 0.3;
      let weightedDPS = roleValue(teamDps, "dpsRating") * 0.4;
      let weightedTotal = weightedSupport + weightedTank + weightedDPS;
      return weightedTotal.toFixed(0);
    };

    teamOneVal = teamRating(teamOneSupport, teamOneDPS, teamOneTank);

    teamTwoVal = teamRating(teamTwoSupport, teamTwoDPS, teamTwoTank);

    let teamData = {
      teamOne: teamOneComp,
      teamTwo: teamTwoComp,
      teamOneLength: teamOne.length,
      teamTwoLength: teamTwo.length,
      teamOneVal: Number(teamOneVal),
      teamTwoVal: Number(teamTwoVal),
    };

    return teamData;
  };

  let teamData;
  // if team averages are not equal resort
  // } while (teamOneVal !== teamTwoVal);
  //return data object
  let i = 0;
  while (true) {
    i++;
    if (i >= 50) {
      break;
    }

    teamData = weightSort(props);
    console.log(teamData);
    if (teamData.teamOneVal === teamData.teamTwoVal) {
      break;
    }
  }

  console.log("abeeeeeeek!");
  return teamData;
};

export default weightedTeamSort;
