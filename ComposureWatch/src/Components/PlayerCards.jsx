const PlayerCards = (props) => {
  return (
    <div>
      <p>{props.playerInfo[0].name}</p>
      <p>{props.playerInfo[0].character}</p>
      <p>{props.playerInfo[0].rank}</p>
    </div>
  );
};

export default PlayerCards;
