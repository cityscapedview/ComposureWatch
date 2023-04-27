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
      id: "bronze5",
      img: bronze,
    },
    {
      id: "bronze4",
      img: bronze,
    },
    {
      id: "bronze3",
      img: bronze,
    },
    {
      id: "bronze2",
      img: bronze,
    },
    {
      id: "bronze1",
      img: bronze,
    },
    {
      id: "silver5",
      img: silver,
    },
    {
      id: "silver4",
      img: silver,
    },
    {
      id: "silver3",
      img: silver,
    },
    {
      id: "silver2",
      img: silver,
    },
    {
      id: "silver1",
      img: silver,
    },

    {
      id: "gold5",
      img: gold,
    },
    {
      id: "gold4",
      img: gold,
    },
    {
      id: "gold3",
      img: gold,
    },
    {
      id: "gold2",
      img: gold,
    },
    {
      id: "gold1",
      img: gold,
    },

    {
      id: "platinum5",
      img: platinum,
    },
    {
      id: "platinum4",
      img: platinum,
    },
    {
      id: "platinum3",
      img: platinum,
    },
    {
      id: "platinum2",
      img: platinum,
    },
    {
      id: "platinum1",
      img: platinum,
    },
    {
      id: "diamond5",
      img: diamond,
    },
    {
      id: "diamond4",
      img: diamond,
    },
    {
      id: "diamond3",
      img: diamond,
    },
    {
      id: "diamond2",
      img: diamond,
    },
    {
      id: "diamond1",
      img: diamond,
    },
    {
      id: "master5",
      img: master,
    },
    {
      id: "master4",
      img: master,
    },
    {
      id: "master3",
      img: master,
    },
    {
      id: "master2",
      img: master,
    },
    {
      id: "master1",
      img: master,
    },
    {
      id: "grandMaster5",
      img: grandmaster,
    },
    {
      id: "grandMaster4",
      img: grandmaster,
    },
    {
      id: "grandMaster3",
      img: grandmaster,
    },
    {
      id: "grandMaster2",
      img: grandmaster,
    },
    {
      id: "grandMaster1",
      img: grandmaster,
    },
  ];

  const SearchImg = (attribute, list) => {
    let result = list.filter((item) => item.id === attribute);
    return result[0].img;
  };

  let charRank = SearchImg(rank, rankList);

  return <img className="h-[60px]" src={charRank} alt="character rank" />;
};

export default RankIcon;
