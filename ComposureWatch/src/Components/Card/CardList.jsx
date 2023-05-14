import React from "react";

import PlayerCards from "./PlayerCards";
import PlayerSuperCards from "./PlayerSuperCards";

const CardList = (props) => {
  if (props.cards.length === 0) {
    return <h2>No Cards</h2>;
  }
  console.log(props.team);
  return (
    <ul className="grid col-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8">
      {props.cards.map((card) => (
        <PlayerSuperCards
          id={card.id}
          name={card.name}
          character={card.character}
          rank={card.rank}
          rating={card.rating}
          cardRemoveChangeHandler={props.cardRemoveChangeHandler}
          team={props.team}
        />
      ))}
    </ul>
  );
};

export default CardList;
