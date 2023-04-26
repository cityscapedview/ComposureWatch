import React, { useState } from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";
import SortingLogic from "../Sorting/SortingLogic";

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

  const [kumite, setKumite] = useState("dog");

  const onSaveCharDataHandler = (enteredCharData) => {
    setCards((prevCards) => {
      return [enteredCharData, ...prevCards];
    });
  };

  const kumiteChangeHandler = () => {
    setKumite("cat");
  };
  console.log(kumite);

  const CondRender = ({ cards, kumite }) => {
    if (kumite === "dog") {
      return null;
      // return <div>Dog</div>;
    } else {
      console.log(kumite);
      return <SortingLogic info={cards} />;
      // return <div>Cat</div>;
    }
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
        <button
          type="submit"
          onClick={kumiteChangeHandler}
          className="bg-blue-600 w-30 h-15 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 hover:bg-red-600"
        >
          Kumite!
        </button>
        <CondRender cards={cards} kumite={kumite} />
      </div>
    </div>
  );
};

export default CreateCard;
