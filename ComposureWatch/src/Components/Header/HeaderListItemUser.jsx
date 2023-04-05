import User from "../User";
import Chevron from "../Chevron";

const HeaderListItemUser = (props) => {
  return (
    <li className="flex flex-row items-center pr-2">
      <User />
      <a
        className="block py-2 pl-1 pr-1 text-lg leading-5 font-medium text-left"
        href="#"
      >
        {props.info}
      </a>
      <Chevron />
    </li>
  );
};

export default HeaderListItemUser;
