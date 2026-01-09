import React, { type FC } from "react";
import type { Car } from "../../types";
import { getImage } from "../../utils/getImages";

interface Props {
  car: Car;
}

const Images: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="w-full h-60 ">
        <img
          src={getImage(car, undefined, true)}
          alt=""
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <div className="flex gap-3 my-3">
        <div className="rounded-xl flex-1 flex relative h-30 bg-primary-blue/30">
          <img
            src={getImage(car, "28")}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="rounded-xl flex-1 flex relative h-30 bg-primary-blue/30">
          <img
            src={getImage(car, "09")}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="rounded-xl flex-1 flex relative h-30 bg-primary-blue/30">
          <img
            src={getImage(car, "13")}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
