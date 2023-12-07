import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classButton = "text-sm text-blue-500 hover:text-blue-600 hover:underline"
  if (to === "-1")
    return <button className={classButton} onClick={() => navigate(-1)}>&larr;{children}</button>;

  return (
    <Link
      to={to}
      className={classButton}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
