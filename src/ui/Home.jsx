import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  const backgroundImageUrl = "src/assets/pizza-delivery-homepage.jpg";

  return (
    <div className="mx-4 my-10 space-y-4 rounded bg-slate-100/80 p-5 text-center sm:my-16 sm:space-y-6 ">
      <img
        src={backgroundImageUrl}
        alt="Pizza delivery"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100"
      />

      <h1 className="text-center text-xl font-semibold md:text-3xl">
        Pizza Delivery Co.
        <br />
        <br />
        <span className="text-orange-400  ">
          Straight out of the oven, directly to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
