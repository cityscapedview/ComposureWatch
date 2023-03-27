const RankIcon = (props) => {
  const rankList = [
    {
      id: "bronze",
      img: "src/images/badge/bronze.webp",
    },
    {
      id: "silver",
      img: "src/images/badge/silver.webp",
    },
    {
      id: "gold",
      img: "src/images/badge/gold.webp",
    },
    {
      id: "platinum",
      img: "src/images/badge/platinum.webp",
    },
    {
      id: "diamond",
      img: "src/images/badge/diamond.webp",
    },
    {
      id: "master",
      img: "src/images/badge/master.webp",
    },
    {
      id: "grandMaster",
      img: "src/images/badge/grandmaster.webp",
    },
  ];

  let charRank;
  let rank = rankList.find((item) => item.id === props.rank);
  if (rank) {
    charRank = rank.img;
  }

  return <img src={charRank} alt="character rank" className="" />;
};

export default RankIcon;
