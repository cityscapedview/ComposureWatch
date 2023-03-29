const HeaderListItem = (props) => {
  return (
    <li>
      <a
        className="block py-2 pl-3 pr-4 text-lg leading-5 font-medium text-left"
        href="#"
      >
        {props.info}
      </a>
    </li>
  );
};

export default HeaderListItem;
