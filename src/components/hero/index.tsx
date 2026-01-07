import React, { type FC } from "react";
import Button from "../button";
import { motion } from "motion/react";

const Hero: FC = () => {
  return (
    <div className="hero padding-x padding-y">
      <div className="pt-20 xl:flex-1 max-h-[920px]">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="hero-title"
        >
          Özgürlüğü Hisste, Yolculuğa Başla
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
          className="hero-subtitle"
        >
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin{" "}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.2, ease: "easeOut" }}
          className="hero-subtitle"
        >
          <Button type="button" text="Arabaları Keşfet" designs="mt-12" />
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center items-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-accent/30 rounded-full blur-3xl -z-10 animate-pulse" />
        <img
          src="/hero.png"
          alt=""
          className="object-contain xl:w-[600px] xl:h-[477px] drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
