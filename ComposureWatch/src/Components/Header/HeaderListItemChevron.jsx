import Chevron from "../Chevron";

const HeaderListItemChevron = (props) => {
  return (
    <li className="flex flex-row items-center">
      <a
        className="block py-2 pl-3 pr-1 text-lg leading-5 font-medium text-left"
        href="#"
      >
        {props.info}
      </a>
      <Chevron />
    </li>
  );
};

export default HeaderListItemChevron;
