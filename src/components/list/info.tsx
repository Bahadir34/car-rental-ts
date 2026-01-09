import { type FC } from "react";
import { type Car } from "../../types";
import { motion } from "framer-motion";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: "./steering-wheel.svg",
      text: car.trany,
    },
    {
      icon: "./tire.svg",
      text: car.drive,
    },
    {
      icon: "./calendar.svg",
      text: car.year,
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 },
    }),
  };

  return (
    <div className="w-full flex-between">
      {arr.map((item, index) => (
        <motion.div
          // ^ burada kullanilan custom variants da visible a gider
          custom={index}
          whileInView="visible"
          initial="hidden"
          variants={variants}
          key={index}
          className="flex-center flex-col gap-2"
        >
          <img src={item.icon} alt={item.text} width={25} height={25} />
          <p className="text-center">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
