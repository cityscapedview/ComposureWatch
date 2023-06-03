import React from "react";

import PlayerCards from "./PlayerCards";

const CardList = (props) => {
  if (props.cards.length === 0) {
    return <h2>No Cards</h2>;
  }

  return (
    <ul className="grid col-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8">
      {props.cards.map((card) => (
        <PlayerCards
          id={card.id}
          name={card.name}
          character={card.character}
          tankRank={card.tankRank}
          dpsRank={card.dpsRank}
          supportRank={card.supportRank}
          tankRating={card.tankRating}
          dpsRating={card.dpsRating}
          supportRating={card.supportRating}
          onRemoveChangeHandler={props.onRemoveChangeHandler}
          team={props.team}
        />
      ))}
    </ul>
  );
};

export default CardList;
