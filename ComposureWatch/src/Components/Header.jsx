import HeaderListItem from "./HeaderListItem";

const Header = () => {
  return (
    <div className="sticky top-4 mx-auto">
      <header className="mx-4 px-12 py-3 flex justify-start items-end space-x-6 border rounded-lg text-black bg-[rgba(229,235,244,0.8)]">
        <div>
          <ul className="flex flex-row justify-start">
            <HeaderListItem info="Game Info" />
            <HeaderListItem info="Heros" />
            <HeaderListItem info="Season 3" />
            <HeaderListItem info="News" />
            <HeaderListItem info="Community" />
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
