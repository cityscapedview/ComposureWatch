import ChevronSvg from "../SVG/ChevronSvg";
import UserSvg from "../SVG/UserSvg";

const HeaderListItemUser = ({ info }) => {
  return (
    <li className="flex flex-row items-center justify-end md:justify-start pr-2">
      <UserSvg />
      <a
        className="py-2 pl-1 pr-1 text-lg leading-5 font-medium text-left hidden md:block"
        href="#"
      >
        {info}
      </a>
      <div className="hidden md:block">
        <ChevronSvg />
      </div>
    </li>
  );
};

export default HeaderListItemUser;
