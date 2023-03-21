const Body = (props) => {
  const classes =
    "w-screen h-screen text-[#1d253a] bg-gradient-to-r from-[#66c4ff]  via-[#33b1ff]to-[#009dff]" +
    props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Body;
