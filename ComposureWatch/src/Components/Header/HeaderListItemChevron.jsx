import ChevronSvg from "../SVG/ChevronSvg";

const HeaderListItemChevron = ({ info }) => {
  return (
    <li className="flex flex-row items-center ">
      <a
        className="py-2 pl-1 pr-1 text-lg leading-5 font-medium text-left hidden md:block"
        href="#"
      >
        {info}
      </a>
      <div className="hidden lg:block">
        <ChevronSvg />
      </div>
    </li>
  );
};

export default HeaderListItemChevron;
