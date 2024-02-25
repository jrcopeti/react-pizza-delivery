import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const homePageInputClass = isHomePage
    ? "opacity-80 w-28 rounded-full px-4 py-2 text-sm transition-all duration-300  placeholder:text-xs placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-amber-200  sm:w-64 sm:placeholder:text-base sm:focus:w-72 "
    : "w-28 rounded-full px-4 py-2 text-sm transition-all duration-300  placeholder:text-xs placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-amber-200  sm:w-64 sm:placeholder:text-base sm:focus:w-72 ";

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={homePageInputClass}
      />
    </form>
  );
}

export default SearchOrder;
