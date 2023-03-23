const Body = (props) => {
  const classes = "w-screen h-screen text-[#1d253a]" + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Body;
