import React, { useEffect, type FC } from "react";
import { useNavigate } from "react-router-dom";

const Redirect: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/cars");
  }, []);

  return <div></div>;
};

export default Redirect;
