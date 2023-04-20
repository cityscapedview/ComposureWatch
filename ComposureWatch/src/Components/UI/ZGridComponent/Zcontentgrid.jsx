function Zcontentgrid({ children }) {
  const classes =
    "grid grid-cols-1 justify-items-center content-center text-center md:text-left max-w-[700px] " +
    children.className;

  return <div className={classes}>{children}</div>;
}

export default Zcontentgrid;
