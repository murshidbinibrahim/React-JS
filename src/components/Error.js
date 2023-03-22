import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //console.log(err);
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Unexpected Application Error!</h2>
      <h3>{`${status} - ${statusText}`}</h3>
    </div>
  );
};

export default Error;
