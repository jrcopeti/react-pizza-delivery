import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.statusText) {
    return (
      <div className="border-b border-stone-500  bg-amber-500 px-4 py-3 text-center text-xl ">
        <h1>Something went wrong 😢</h1>
        <p>Error: {error.statusText}</p>
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h1>Something went wrong 😢</h1>
        <p>Error: {error.message}</p>
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    );
  }
}

export default Error;
