const Zgridright = ({ children }) => {
  const classes =
    "grid grid-cols-1 md:grid-cols-[60fr,40fr] gap-x-20 max-[1200px]:gap-x-10 sm:gap-y-8 gap-y-6 px-4 py-10 sm:px-6 sm:py-16 md:px-10 md:py-20 justify-items-center items-center text-white max-w-[1600px] " +
    children.className;

  return <div className={classes}>{children}</div>;
};
export default Zgridright;
