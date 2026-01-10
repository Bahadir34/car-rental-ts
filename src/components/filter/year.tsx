import React, { useState, type FC, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [year, setYear] = useState<string | null>(
    searchParams.get("year") || ""
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (year) searchParams.set("year", year);
    else searchParams.delete("year");

    setSearchParams(searchParams);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="year" className="text-white font-semibold mb-2 text-sm">
        Yıl
      </label>

      <div className="flex items-center">
        <input
          value={year as string}
          onChange={(e) => setYear(e.target.value)}
          placeholder="örn:2026"
          type="number"
          name="year"
          className="w-32 h-[52px] px-4 glass-effect rounded-l-2xl border border-white/20 text-white placeholder-grey-light focus:border-primary-blue/50 focus:bg-white/30 transition-all duration-300"
        />
        <button name="search year" className="cursor-pointer h-[52px]  px-3 glass-effect rounded-r-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <img src="./search.svg" alt="search" className="size-6" />
        </button>
      </div>
    </form>
  );
};

export default Year;
