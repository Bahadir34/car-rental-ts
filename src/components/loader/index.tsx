import React, { type FC } from "react";

const Loader: FC = () => {
  return (
    <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-indigo-900/50 via-green-800/90 to-indigo-950/50 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
      <div className="rounded-full h-full w-full bg-clip-content bg-white/10 background-blur-md"></div>
    </div>
  );
};

export default Loader;
