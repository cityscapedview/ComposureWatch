const SearchSvg = () => {
  return (
    <li className="flex flex-row items-center pr-8">
      <div className="hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2px"
          stroke="currentColor"
          className="w-6 h-6 stroke-[#6b7280]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </li>
  );
};

export default SearchSvg;
