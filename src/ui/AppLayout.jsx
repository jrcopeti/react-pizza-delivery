import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import IsLoading from "./IsLoading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]  gap-4">
      {isLoading && <IsLoading />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <h1>Content</h1>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
