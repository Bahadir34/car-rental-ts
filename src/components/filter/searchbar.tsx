import { useMemo, useState, type FC, type FormEvent } from "react";
import ReactSelect from "react-select";
import { makes, selectStyles } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const SearchBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [make, setMake] = useState<string>(searchParams.get("make") || "");
  const [model, setModel] = useState<string>(searchParams.get("model") || "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(make, model);

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    setSearchParams(searchParams);
  };

  // ^ markalar dizisini react-selectin istedigi formata cevir
  const options = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="searchbar flex gap-4 items-end justify-center"
    >
      <div className="searchbar-item items-end gap-2 max-md:flex-col">
        {/* Marka searchbar */}
        <div className="w-full flex flex-col">
          <label
            className="text-white font-semibold mb-2 text-sm"
            htmlFor="make"
          >
            Marka
          </label>
          <ReactSelect
            value={make ? { value: make, label: make } : null}
            options={options}
            placeholder="Marka seçiniz..."
            isSearchable={true}
            className="w-full min-w-[200px] z-2"
            styles={selectStyles}
            onChange={(option) => setMake(option?.label as string)}
          />
        </div>

        {/* Model searchbar */}
        <div className="w-full flex flex-col">
          <label
            className="text-white font-semibold mb-2 text-sm"
            htmlFor="make"
          >
            Model
          </label>
          <div className="w-full flex gap-2 items-center ">
            <div className="relative flex-1  ">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2  z-1 ">
                <img
                  src="./model-icon.png"
                  alt="model-icon"
                  className="size-6"
                />
              </div>
              <input
                type="text"
                placeholder="Model giriniz..."
                className="searchbar-input w-full"
                onChange={(e) => setModel(e.target.value)}
                value={model || ""}
              />
            </div>
            <button className="cursor-pointer  p-3 glass-effect rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <img src="./search.svg" alt="search" className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
