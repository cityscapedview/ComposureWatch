const SearchImg = (attribute, list) => {
  let result = list.filter((item) => item.id === attribute);
  return result[0].img;
};

export default SearchImg;
