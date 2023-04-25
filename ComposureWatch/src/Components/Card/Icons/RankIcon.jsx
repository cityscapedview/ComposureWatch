import bronze from "../../../images/badge/bronze.webp";
import silver from "../../../images/badge/silver.webp";
import gold from "../../../images/badge/gold.webp";
import platinum from "../../../images/badge/platinum.webp";
import diamond from "../../../images/badge/diamond.webp";
import master from "../../../images/badge/master.webp";
import grandmaster from "../../../images/badge/grandmaster.webp";

const RankIcon = ({ rank }) => {
  const rankList = [
    {
      id: "bronze",
      img: bronze,
    },
    {
      id: "silver",
      img: silver,
    },
    {
      id: "gold",
      img: gold,
    },
    {
      id: "platinum",
      img: platinum,
    },
    {
      id: "diamond",
      img: diamond,
    },
    {
      id: "master",
      img: master,
    },
    {
      id: "grandMaster",
      img: grandmaster,
    },
  ];

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
  };

  const SearchImg = (attribute, list) => {
    let result = list.filter((item) => item.id === attribute);
    return result[0].img;
  };

  let charRank = SearchImg(rank, rankList);

  return <img src={charRank} alt="character rank" className="" />;
};

export default RankIcon;
