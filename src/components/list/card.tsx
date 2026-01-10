import { useEffect, useState, type FC } from "react";
import type { Car } from "../../types";
import { getPrice } from "../../utils/getprice";
import Info from "./info";
import Button from "../button";
import { motion, scale } from "framer-motion";
import Modal from "../modal";
import { getImage } from "../../utils/getImages";

interface CardProps {
  car: Car;
}
const Card: FC<CardProps> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) document.body.style = "overflow:hidden";
    else document.body.style = "overflow : auto";
  }, [isOpen]);

  return (
    <>
      <article className="car-card group">
        <h2 className="car-card-content-title">{car.model}</h2>

        <div className="flex mt-6 text-[19px]">
          <span className="font-semibold">₺</span>
          <span className="text-[32px]">{getPrice(car)}</span>
          <span className="font-semibold self-end">/gün</span>
        </div>

        <div>
          <img
            src={getImage(car)}
            alt={car.model + car.model}
            className="w-full h-full object-contain min-h-[200px]"
          />
        </div>
        <div className="w-full">
          <div className="group-hover:hidden">
            <Info car={car} />
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className="w-full hidden group-hover:block"
        >
          <Button
            name="more"
            type="button"
            text="Daha Fazla"
            designs="w-full text-white mt-[0.5px]"
            fn={() => setIsOpen(true)}
          />
        </motion.div>
      </article>
      <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default Card;
