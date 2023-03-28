const HeaderListItem = (props) => {
  return (
    <li>
      <a className="block py-2 pl-3 pr-4" href="#">
        {props.info}
      </a>
    </li>
  );
};

export default HeaderListItem;
