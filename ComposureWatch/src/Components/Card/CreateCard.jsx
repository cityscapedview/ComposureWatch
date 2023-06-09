import React, { useEffect, useState } from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";
import SortingLogic from "../Sorting/SortingLogic";

const CreateCard = () => {
  const [cards, setCards] = usePersistState([], "cards");

  function usePersistState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const persistValue = window.localStorage.getItem(key);
      return persistValue !== null ? JSON.parse(persistValue) : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

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

  const cardRemoveChangeHandler = (cardId) => {
    setCards((prevCards) => {
      return prevCards.filter((card) => {
        return card.id !== cardId;
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
          cards={cards}
          team={"cardPool"}
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
