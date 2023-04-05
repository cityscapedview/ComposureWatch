const GlobalContainer = ({ children }) => {
  const classes = "" + children.className;

  return <div className={classes}>{children}</div>;
};

export default GlobalContainer;
