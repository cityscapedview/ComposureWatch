const PlayerCards = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.character}</p>
      <p>{props.rank}</p>
    </div>
  );
};

export default PlayerCards;
