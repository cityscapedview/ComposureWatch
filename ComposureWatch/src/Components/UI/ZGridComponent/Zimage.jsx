const Zimage = ({ img, alt }) => {
  return (
    <div className="self-start">
      <img src={img} alt={alt} className="rounded" />
    </div>
  );
};

export default Zimage;
