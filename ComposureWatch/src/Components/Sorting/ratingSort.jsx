const ratingSort = (selectedRank) => {
  let ranks = [
    {
      id: "bronze5",
      rating: 0.5,
    },
    {
      id: "bronze4",
      rating: 0.55,
    },
    {
      id: "bronze3",
      rating: 0.6,
    },
    {
      id: "bronze2",
      rating: 0.65,
    },
    {
      id: "bronze1",
      rating: 0.7,
    },
    {
      id: "silver5",
      rating: 0.75,
    },
    {
      id: "silver4",
      rating: 0.8,
    },
    {
      id: "silver3",
      rating: 0.85,
    },
    {
      id: "silver2",
      rating: 0.9,
    },
    {
      id: "silver1",
      rating: 0.95,
    },
    {
      id: "gold5",
      rating: 1,
    },
    {
      id: "gold4",
      rating: 1.05,
    },
    {
      id: "gold3",
      rating: 1.1,
    },
    {
      id: "gold2",
      rating: 1.15,
    },
    {
      id: "gold1",
      rating: 1.2,
    },
    {
      id: "platinum5",
      rating: 1.25,
    },
    {
      id: "platinum4",
      rating: 1.3,
    },
    {
      id: "platinum3",
      rating: 1.35,
    },
    {
      id: "platinum2",
      rating: 1.4,
    },
    {
      id: "platinum1",
      rating: 1.45,
    },
    {
      id: "diamond5",
      rating: 1.5,
    },
    {
      id: "diamond4",
      rating: 1.55,
    },
    {
      id: "diamond3",
      rating: 1.6,
    },
    {
      id: "diamond2",
      rating: 1.65,
    },
    {
      id: "diamond1",
      rating: 1.7,
    },
    {
      id: "master5",
      rating: 1.75,
    },
    {
      id: "master4",
      rating: 1.8,
    },
    {
      id: "master3",
      rating: 1.85,
    },
    {
      id: "master2",
      rating: 1.9,
    },
    {
      id: "master1",
      rating: 1.95,
    },
    {
      id: "grandMaster5",
      rating: 2,
    },
    {
      id: "grandMaster4",
      rating: 2.05,
    },
    {
      id: "grandMaster3",
      rating: 2.1,
    },
    {
      id: "grandMaster2",
      rating: 2.15,
    },
    {
      id: "grandMaster1",
      rating: 2.2,
    },
  ];

  console.log(selectedRank);

  const searchRating = (selected, list) => {
    let result = list.filter((item) => item.id === selected);
    return result[0].rating;
  };

  const ratingResult = searchRating(selectedRank, ranks);

  return ratingResult;
};

export default ratingSort;
