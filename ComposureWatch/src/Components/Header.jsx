import HeaderListItem from "./HeaderListItem";

const Header = () => {
  return (
    <div className="sticky top-4 mx-auto">
      <header className="mx-4 px-12 py-3 flex justify-start items-end space-x-6 border rounded-lg text-black bg-[rgba(229,235,244,0.95)] relative">
        <div className="bg-white text-blue-400 px-5 pt-4 h-full absolute left-0 top-0 font-bold text-xl uppercase tracking-tighter rounded-l-lg">
          Blissard
        </div>
        <img
          src="src/images/icons/kisspng-yin-and-yang-symbol-clip-art-ying-yang-5ac89db48a7b91.1364399115230970125672.png"
          alt="yin-yang logo"
          className="pl-20 h-10"
        />
        <div>
          <ul className="flex flex-row justify-start">
            <HeaderListItem info="Game Info" />
            <HeaderListItem info="Heroes" />
            <HeaderListItem info="Season 3" />
            <HeaderListItem info="News" />
            <HeaderListItem info="Community" />
          </ul>
        </div>
        <button className="bg-orange-600  px-3 py-2 ml-6 uppercase font-semibold rounded-md opacity-80 text-white hover:opacity-100">
          Try now
        </button>
      </header>
    </div>
  );
};

export default Header;
