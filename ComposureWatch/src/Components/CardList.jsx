import React from "react";

import PlayerCards from "./PlayerCards";

const CardList = (props) => {
  if (props.info[0].name == "Zen") {
    return <h2>No Cards</h2>;
  }

  return (
    <ul>
      {props.info.map((card) => (
        <PlayerCards
          name={card.name}
          character={card.character}
          rank={card.rank}
        />
      ))}
    </ul>
  );
};

export default CardList;
