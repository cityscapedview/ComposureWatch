import HeaderListItem from "./HeaderListItem";
import HeaderListItemChevron from "./HeaderListItemChevron";
import HeaderListItemUser from "./HeaderListItemUser";
import SearchSvg from "../SVG/SearchSvg";
import yinyang from "../../images/icons/kisspng-yin-and-yang-symbol-clip-art-ying-yang-5ac89db48a7b91.1364399115230970125672.png";
import HamburgerSvg from "../SVG/HamburgerSvg";
import EllipsesSvg from "../SVG/EllipsesSvg";

const Header = () => {
  return (
    <div className="fixed md:top-4 right-0 left-0 z-[6]">
      <header className="md:mx-4 px-12 py-2 md:py-3 flex justify-center md:justify-start items-center md:space-x-6 border md:rounded-lg text-black bg-[rgba(229,235,244,0.95)] relative whitespace-nowrap">
        <div className="bg-white text-blue-400 hover:text-blue-300 cursor-pointer px-5 pt-4 h-full absolute left-0 top-0 font-bold text-xl uppercase tracking-tighter rounded-l-lg hidden md:block">
          Blissard
        </div>
        <div className="md:hidden items-center flex absolute h-full left-3 top-0">
          <HamburgerSvg />
        </div>
        <img
          src={yinyang}
          alt="yin-yang logo"
          className="md:pl-20 h-10 opacity-100 hover:opacity-80 cursor-pointer "
        />
        <div>
          <ul className="flex flex-row justify-start items-center gap-x-1">
            <HeaderListItemChevron info="Game Info" />
            <HeaderListItem info="Heroes" />
            <HeaderListItem info="Season 3" />
            <div className="hidden min-[975px]:block">
              <HeaderListItem info="News" />
            </div>
            <div className="hidden min-[1110px]:block">
              <HeaderListItemChevron info="Community" />
            </div>
            <div className="hidden min-[1180px]:block">
              <HeaderListItemChevron info="Shop" />
            </div>
            <div className="hidden min-[960px]:block min-[1180px]:hidden pl-2 h-full">
              <EllipsesSvg />
            </div>
          </ul>
        </div>
        <div className="items-center flex absolute h-full right-3 top-0">
          <SearchSvg />
          <ul className="flex flex-row justify-start">
            <HeaderListItemUser info="Account" />
          </ul>
          <div className="hidden md:block">
            <button className="bg-orange-600  px-3 py-2 ml-6 uppercase font-semibold rounded-md opacity-100 text-white hover:opacity-80 inline-block">
              Try now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
