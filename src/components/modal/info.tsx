import React, { type FC } from "react";
import type { Car } from "../../types";
import { formatData } from "../../utils/formatData";
import { div } from "motion/react-client";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gradient mb-4">
        {car.make} {car.model}
      </h3>

      {formatData(car).map(([k, v], index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center py-3 px-4 mb-3 glass-dark rounded-xl border border-white/10"
          >
            <span className="capitalize text-grey-light font-semibold">
              {k}
            </span>
            <span className="font-semibold capitalize text-white">
              {v === "Y" || v === "T" ? "Var" : v === "N" ? "Yok" : v || "-"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
