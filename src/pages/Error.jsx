import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError();
    const navigate = useNavigate();
    const onHandleHomePage = () => {
        navigate("/");
    };
  return (
    <>
      <h2> Error!</h2>
      <h3> {error.state}</h3>
      <h3> {error.message}</h3>
      <button onClick={onHandleHomePage}> Go to Hme Page</button>
    </>
  );
}
