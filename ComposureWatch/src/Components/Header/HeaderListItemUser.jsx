import ChevronSvg from "../SVG/ChevronSvg";
import UserSvg from "../SVG/UserSvg";

const HeaderListItemUser = ({ info }) => {
  return (
    <li className="flex flex-row items-center pr-2">
      <UserSvg />
      <a
        className="block py-2 pl-1 pr-1 text-lg leading-5 font-medium text-left"
        href="#"
      >
        {info}
      </a>
      <ChevronSvg />
    </li>
  );
};

export default HeaderListItemUser;
