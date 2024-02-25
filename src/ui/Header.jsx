import { Link, useLocation } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const homePageHeaderClass = isHomePage
    ? "font-pizza flex items-center justify-between  bg-amber-500/60 px-4 py-3 sm:px-6 sm:py-4"
    : "font-pizza flex items-center justify-between border-b border-stone-500 bg-amber-500 px-4 py-3 sm:px-6 sm:py-4";

  return (
    <header className={homePageHeaderClass}>
      <Link
        to="/"
        className="text-l rounded-md bg-amber-200/80 p-1 font-bold tracking-widest sm:text-xl"
      >
        Pizza Delivery Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
