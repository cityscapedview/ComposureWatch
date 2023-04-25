import React, { useState } from "react";
import CardForm from "./CardForm";
import PlayerCards from "./PlayerCards";
import CardList from "./CardList";

const DUMMY_CARDS = [
  {
    id: 1337,
    name: "Zen",
    character: "ana",
    rank: "platinum3",
    rating: 1.35,
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
    <div>
      <div className="bg-gradient-to-t from-[#009dff]  via-[#33b1ff] to-[#66c4ff] flex flex-col justify-center items-center gap-y-4 uppercase text-white py-80 px-40">
        <h2 className="text-3xl font-bold">Create Player Card</h2>
        <p>Enter player information below</p>
        <CardForm onSaveCharData={onSaveCharDataHandler} />
      </div>
      <div className="bg-black flex flex-col justify-center items-center gap-y-4 uppercase text-white py-80 px-40">
        <CardList info={cards} />

        <div className="text-white font-bold italic text-8xl">VS</div>
        <button
          type="submit"
          className="bg-blue-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:bg-red-600"
        >
          Kumite!
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
