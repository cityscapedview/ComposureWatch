// This container is used to control when the header is present and fixed.

const StickyContainer = ({ children }) => {
  const classes = "" + children.className;

  return <div className={classes}>{children}</div>;
};

export default StickyContainer;
