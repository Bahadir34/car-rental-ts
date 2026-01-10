import React, { type FC } from "react";
import SearchBar from "./searchbar";
import Year from "./year";

const Filter: FC = () => {
  return (
    <div className="mt-20 padding-x padding-y max-width">
      <div className="home-text-container">
        <h2 className="text-5xl text-bold text-gradient mb-2">
          Araba Kataloğu
        </h2>
        <p className="text-xl text-grey-light">
          Beğenebileceğin araçları keşfet
        </p>
      </div>

      <div className="home-filters">
        <SearchBar />
        <div className="home-filter-container">
          <Year />
        </div>
      </div>
    </div>
  );
};

export default Filter;
