import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useEffect, useState } from "react";

function Home() {
  const hero = "/hero.jpg";
  const heroLowRes = "/hero-low-resolution.jpeg";

  const [img, setImg] = useState(heroLowRes);

  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const LoadingImg = new Image();
    LoadingImg.src = hero;
    LoadingImg.onload = () => {
      setImg(LoadingImg.src);

    };
  }, []);

  return (
    <>
      <img
        src={img}
        alt="Pizza delivery"
        className="absolute inset-0 -z-10 h-full w-full object-cover "
      />
      <div className="  m-5 space-y-4 rounded-md bg-amber-50/40 p-6 text-center sm:mb-8 sm:mt-8 sm:space-y-6 ">
        <h1 className="  text-xl tracking-widest md:text-3xl ">
          <span className=" rounded-md bg-amber-200/70 p-2 font-extrabold  ">
            Pizza Delivery Co.
          </span>
        </h1>
        <br />
        <span className=" bg-none text-center text-xl  font-extrabold tracking-normal text-stone-800 md:text-3xl">
          Out of the oven, directly to you.
        </span>
        <br />

        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </>
  );
}

export default Home;
