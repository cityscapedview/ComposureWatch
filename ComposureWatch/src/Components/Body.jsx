const Body = (props) => {
  const classes =
    "w-screen h-screen text-[#1d253a]p-0 m-0 box-border block" +
    props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Body;
