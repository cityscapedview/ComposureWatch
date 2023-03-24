const RankIcon = (props) => {
  const rankList = [
    {
      id: "Bronze",
      img: "src/IMG/badge/bronze.webp",
    },
    {
      id: "Silver",
      img: "src/IMG/badge/silver.webp",
    },
    {
      id: "Gold",
      img: "src/IMG/badge/gold.webp",
    },
    {
      id: "Platinum",
      img: "src/IMG/badge/platinum.webp",
    },
    {
      id: "Diamond",
      img: "src/IMG/badge/diamond.webp",
    },
    {
      id: "Master",
      img: "src/IMG/badge/master.webp",
    },
    {
      id: "Grand Master",
      img: "src/IMG/badge/grandmaster.webp",
    },
  ];

  let charRank;
  let rank = rankList.find((item) => item.id === props.rank);
  if (rank) {
    charRank = rank.img;
  }

  return (
    <img
      src={charRank}
      alt="character rank"
      className="border-2 border-black rounded-xl shadow-2xl shadow-[#13336C]"
    />
  );
};

export default RankIcon;
