import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useEffect, useState } from "react";
import IsLoading from "./IsLoading";

function Home() {
  const backgroundImageUrlLowResolution =
    "/pizza-delivery-homepage-low-resolution-small.jpeg";
  const backgroundImageUrl = "/pizza-delivery-homepage.jpg";

  const [img, setImg] = useState(backgroundImageUrlLowResolution);
  const [imgLoaded, setImgLoaded] = useState(false);

  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => {
      setImg(img.src);
      setImgLoaded(true);
    };
  }, []);

  if (!imgLoaded) {
    return <IsLoading />;
  }

  return (
    <>
      <img
        src={img}
        loading="eager"
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
