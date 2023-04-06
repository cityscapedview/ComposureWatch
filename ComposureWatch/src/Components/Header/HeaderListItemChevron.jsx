import ChevronSvg from "../SVG/ChevronSvg";

const HeaderListItemChevron = ({ info }) => {
  return (
    <li className="flex flex-row items-center invisible lg:visible">
      <a
        className="block py-2 pl-3 pr-1 text-lg leading-5 font-medium text-left"
        href="#"
      >
        {info}
      </a>
      <ChevronSvg />
    </li>
  );
};

export default HeaderListItemChevron;
