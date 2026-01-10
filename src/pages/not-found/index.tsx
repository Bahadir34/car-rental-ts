import React, { type FC } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[calc(100vh-82px)]">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-xl text-red-200">
          Sayfada kaybolmuş görünüyorsunuz!
        </p>
        <button
          className="px-5 py-3 bg-linear-to-br from-blue-100/90 to-blue-500/90 rounded-xl hover:from-blue-100 hover:to-blue-500 transition duration-500 cursor-pointer"
          name="redirect"
          onClick={() => navigate("/cars")}
        >
          Ana Sayfa
        </button>
      </div>
    </div>
  );
};

export default NotFound;
