import bronze from "../../../images/badge/bronze.webp";
import silver from "../../../images/badge/silver.webp";
import gold from "../../../images/badge/gold.webp";
import platinum from "../../../images/badge/platinum.webp";
import diamond from "../../../images/badge/diamond.webp";
import master from "../../../images/badge/master.webp";
import grandmaster from "../../../images/badge/grandmaster.webp";
import SearchImg from "./SearchImg";

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

  const SearchImg = (attribute, list) => {
    let result = list.filter((item) => item.id === attribute);
    return result[0].img;
  };

  let charRank = SearchImg(rank, rankList);

  return <img src={charRank} alt="character rank" className="" />;
};

export default RankIcon;
