// To be determine if ranks will be part of the rank icon list or housed seperately here for values
import CardList from "./CardList";
import teamSorting from "../Sorting/teamSorting";
import weightedTeamSort from "../Sorting/weightedTeamSort";

const TeamCards = (props) => {
  console.log(weightedTeamSort(props));
  // console.log(teamSorting(props));

  // let teamData = teamSorting(props);
  let teamData = weightedTeamSort(props);

  return (
    <>
      <div>
        {/* Replace with map */}
        <div className="flex flex-row">
          {/* support */}
          <div>Support</div>
          <CardList cards={teamData.teamOne[0]} team={"teamOne"} />
          {/* DPS */}
          <div>DPS</div>
          <CardList cards={teamData.teamOne[1]} team={"teamOne"} />
          {/* Tank */}
          <div>Tank</div>
          <CardList cards={teamData.teamOne[2]} team={"teamOne"} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-6 md:space-x-52">
        <div className="text-[#F5122A] text-xl">
          <p>Team One Value: {teamData.teamOneVal.toFixed(2)}</p>
          <p>Players: {teamData.teamOneLength}</p>
        </div>
        <div className="text-white font-bold italic text-7xl py-2">VS</div>
        <div className="text-[#2EF3FF] text-xl">
          <p>Team Two Value: {teamData.teamTwoVal.toFixed(2)}</p>
          <p>Players: {teamData.teamTwoLength}</p>
        </div>
      </div>
      <div>
        {/* Replace with Map */}
        <div className="flex flex-row">
          {/* Support */}
          <div>Support</div>
          <CardList cards={teamData.teamTwo[0]} team={"teamTwo"} />
          {/* DPS */}
          <div>DPS</div>
          <CardList cards={teamData.teamTwo[1]} team={"teamTwo"} />
          {/* Tank */}
          <div>Tank</div>
          <CardList cards={teamData.teamTwo[2]} team={"teamTwo"} />
        </div>
      </div>
    </>
  );
};
export default TeamCards;
