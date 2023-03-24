const RankIcon = (props) => {
  const rankList = [
    {
      id: "Bronze",
      img: "src/images/badge/bronze.webp",
    },
    {
      id: "Silver",
      img: "src/images/badge/silver.webp",
    },
    {
      id: "Gold",
      img: "src/images/badge/gold.webp",
    },
    {
      id: "Platinum",
      img: "src/images/badge/platinum.webp",
    },
    {
      id: "Diamond",
      img: "src/images/badge/diamond.webp",
    },
    {
      id: "Master",
      img: "src/images/badge/master.webp",
    },
    {
      id: "Grand Master",
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
