// To be determine if ranks will be part of the rank icon list or housed seperately here for values
import CardList from "./CardList";
import teamSorting from "../Sorting/teamSorting";
import weightedTeamSort from "../Sorting/weightedTeamSort";

const TeamCards = (props) => {
  let teamData = teamSorting(props);
  console.log(weightedTeamSort(props));

  return (
    <>
      <div>
        <CardList cards={teamData.teamOne} team={"teamOne"} />
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
        <CardList cards={teamData.teamTwo} team={"teamTwo"} />
      </div>
    </>
  );
};
export default TeamCards;
