const HeaderListItem = ({ info }) => {
  return (
    <li>
      <a
        className="block py-2 pl-3 pr-4 text-lg leading-5 font-medium text-left"
        href="#"
      >
        {info}
      </a>
    </li>
  );
};

export default HeaderListItem;
