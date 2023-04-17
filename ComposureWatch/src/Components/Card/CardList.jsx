import React from "react";

import PlayerCards from "./PlayerCards";

const CardList = (props) => {
  if (props.info.length === 0) {
    return <h2>No Cards</h2>;
  }

  return (
    <ul>
      {props.info.map((card) => (
        <PlayerCards
          id={card.id}
          name={card.name}
          character={card.character}
          rank={card.rank}
        />
      ))}
    </ul>
  );
};

export default CardList;
