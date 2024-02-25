import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const location = useLocation();

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const isCartPage = location.pathname === "/cart";
  const isHomePage = location.pathname === "/";

  const homePageClass = isHomePage
    ? "flex items-center justify-between bg-stone-800/60 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-xl"
    : "flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base";

  if (!totalCartQuantity) return null;

  return (
    <div className={homePageClass}>
      <p className="space-x-4 font-extrabold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      {!isCartPage && <Link to="/cart">Open cart &rarr;</Link>}
    </div>
  );
}

export default CartOverview;
