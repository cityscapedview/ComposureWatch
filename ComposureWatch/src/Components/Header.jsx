const Header = () => {
  return (
    <div className="sticky top-2 mx-auto">
      <header className="mx-4 px-12 py-4 flex justify-start items-end space-x-6 border rounded-lg text-black bg-[rgba(229,235,244,0.8)]">
        <div>
          <ul className="flex flex-row justify-start">
            <li>
              <a className="block py-2 pl-3 pr-4" href="#">
                Game Info
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4" href="#">
                Heros
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4" href="#">
                Season 3
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4" href="#">
                News
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4" href="#">
                Community
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
