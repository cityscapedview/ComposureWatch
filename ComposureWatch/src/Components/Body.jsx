const Body = ({ children }) => {
  const classes =
    "text-[#1d253a] p-0 m-0 box-border block " + children.className;

  return <div className={classes}>{children}</div>;
};

export default Body;
