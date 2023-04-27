import React from "react";

import PlayerCards from "./PlayerCards";

const CardList = (props) => {
  console.log(props);
  if (props.info.length === 0) {
    return <h2>No Cards</h2>;
  }

  return (
    <ul className="grid grid-cols-6 gap-4">
      {props.info.map((card) => (
        <PlayerCards
          id={card.id}
          name={card.name}
          character={card.character}
          rank={card.rank}
          rating={card.rating}
        />
      ))}
    </ul>
  );
};

export default CardList;
