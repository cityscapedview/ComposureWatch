import React from "react";

import TeamTwoCards from "./TeamTwoCards";

const CardList = (props) => {
  if (props.info.length === 0) {
    return <h2>No Cards</h2>;
  }

  return (
    <ul className="grid col-1 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8">
      {props.info.map((card) => (
        <TeamTwoCards
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
