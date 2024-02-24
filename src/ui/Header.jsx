import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-500 bg-amber-500 px-4 py-3  sm:px-6">
      <Link to="/" className="tracking-widest font-bold bg-amber-200 rounded-md text-l p-1 sm:text-xl">
        Pizza Delivery Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
