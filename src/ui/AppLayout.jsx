import { Outlet, useLocation, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import IsLoading from "./IsLoading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]  gap-4">
      {isLoading && <IsLoading />}
      <Header />
      <div className="overflow-scroll">
        <main className={`${isHomePage ? "flex " : "mx-auto max-w-3xl"}`}>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
