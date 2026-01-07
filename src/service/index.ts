import type { CarResponse } from "../types";

export const fetchCars = async (): Promise<CarResponse> => {
  let url = `${import.meta.env.VITE_API_URL}/records/?`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
};
