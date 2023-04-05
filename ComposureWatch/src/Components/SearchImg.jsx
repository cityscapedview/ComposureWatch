const SearchImg = (attribute, list) => {
  let result = list.find((item) => item.id === attribute);
  return result.img;
};

export default SearchImg;
