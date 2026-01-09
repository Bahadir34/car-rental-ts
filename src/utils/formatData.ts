import type { Car } from "../types";

export const formatData = (car: Car): [string, string | number | null][] => {
  // nesne icinden kabul ettigim degerleri belirleyecegim
  const accepted = [
    "make",
    "modal",
    "cylinders",
    "drive",
    "fueltype",
    "trany",
    "vclass",
    "year",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // nesneyi diziye cevir ve filtrele
  const arr = Object.entries(car).filter((item, index) =>
    accepted.includes(item[0])
  );

  return arr;
};
