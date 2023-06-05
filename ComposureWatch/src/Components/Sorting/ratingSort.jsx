const ratingSort = (selectedRank) => {
  let ranks = [
    {
      id: "bronze",
      rating: 1,
    },
    {
      id: "silver",
      rating: 2,
    },
    {
      id: "gold",
      rating: 3,
    },
    {
      id: "platinum",
      rating: 4,
    },
    {
      id: "diamond",
      rating: 5,
    },
    {
      id: "master",
      rating: 6,
    },
    {
      id: "grandMaster",
      rating: 7,
    },
  ];

  const searchRating = (selected, list) => {
    let result = list.filter((item) => item.id === selected);
    return result[0].rating;
  };

  const ratingResult = searchRating(selectedRank, ranks);

  return ratingResult;
};

export default ratingSort;
