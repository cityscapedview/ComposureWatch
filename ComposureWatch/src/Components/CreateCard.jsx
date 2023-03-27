import React, { useState } from "react";
import CardForm from "./CardForm";
import PlayerCards from "./PlayerCards";
import CardList from "./CardList";

const DUMMY_CARDS = [
  {
    name: "Zen",
    character: "ana",
    rank: "platinum",
  },
];

const CreateCard = () => {
  const [cards, setCards] = useState(DUMMY_CARDS);

  const onSaveCharDataHandler = (enteredCharData) => {
    setCards((prevCards) => {
      return [enteredCharData, ...prevCards];
    });
  };

  return (
    <div className="bg-gradient-to-t from-[#009dff]  via-[#33b1ff] to-[#66c4ff] flex flex-col justify-center items-center gap-y-4 uppercase text-white py-80 px-40">
      <h2 className="text-3xl font-bold">Create Player Card</h2>
      <p>Enter player information below</p>
      <CardForm onSaveCharData={onSaveCharDataHandler} />
      <CardList info={cards} />
    </div>
  );
};

export default CreateCard;
