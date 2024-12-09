import React from "react";
import { Link, useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops! An error occured.</h1>
      <p> {error.data}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Error;
