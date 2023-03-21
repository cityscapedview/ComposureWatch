const Body = (props) => {
  const classes =
    "text-[#1d253a] bg-gradient-to-r from-pink-50 via-pink-300 to-purple-400 " +
    props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Body;
