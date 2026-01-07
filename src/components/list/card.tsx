import type { FC } from "react";
import type { Car } from "../../types";

interface CardProps {
  car: Car;
}
const Card: FC<CardProps> = ({ car }) => {
  return (
    <div className="car-card group">
      <h2 className="car-card-content-title">{car.model}</h2>

      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{999}</span>
        <span className="font-semibold self-end">/gün</span>
      </div>
    </div>
  );
};

export default Card;
