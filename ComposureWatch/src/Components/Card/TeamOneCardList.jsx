import React from "react";

import TeamOneCards from "./TeamOneCards";

const CardList = (props) => {
  if (props.cards.length === 0) {
    return <h2>No Cards</h2>;
  }

  return (
    <ul className="grid col-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8">
      {props.cards.map((card) => (
        <TeamOneCards
          id={card.id}
          name={card.name}
          character={card.character}
          rank={card.rank}
          rating={card.rating}
          cardRemoveChangeHandler={props.cardRemoveChangeHandler}
        />
      ))}
    </ul>
  );
};

export default CardList;
