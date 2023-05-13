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

  const [kumite, setKumite] = useState(false);

  const [cardVar, setCardVar] = useState("");

  const onSaveCharDataHandler = (enteredCharData) => {
    setCards((prevCards) => {
      return [enteredCharData, ...prevCards];
    });
  };

  const kumiteChangeHandler = () => {
    setKumite((prevKumite) => !prevKumite);
  };

  const cardSortChangeHandler = () => {
    let currentCards = [...cards];
    setCardVar(currentCards);
  };

  const cardRemoveChangeHandler = (enteredId) => {
    setCards((prevCards) => {
      return prevCards.filter((object) => {
        return object.id !== enteredId;
      });
    });
  };

  const CondRender = ({ kumite }) => {
    if (kumite === false) {
      return <SortingLogic info={cardVar} />;
      // return <div>Dog</div>;
    } else if (kumite === true) {
      return <SortingLogic info={cardVar} />;
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
      <div className="bg-black flex flex-col justify-center items-center gap-y-4 uppercase text-white py-40 px-10">
        <CardList
          info={cards}
          onRemoveChangeHandler={cardRemoveChangeHandler}
        />
        <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row pt-[120px] pb-[120px]">
          <button
            type="submit"
            onClick={cardSortChangeHandler}
            className="bg-blue-600 w-30 h-15 mx-2 px-6 py-3 uppercase font-semibold rounded-sm opacity-80 inline-block hover:bg-red-600"
          >
            Kumite!
          </button>
          <button
            type="submit"
            onClick={kumiteChangeHandler}
            className="bg-blue-600 w-30 h-15 mx-2 px-6 py-3 uppercase font-semibold inline-block rounded-sm opacity-80 hover:bg-red-600"
          >
            Shuffle Team
          </button>
        </div>
        <CondRender kumite={kumite} />
      </div>
    </div>
  );
};

export default CreateCard;
