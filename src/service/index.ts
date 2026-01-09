import type { CarResponse } from "../types";

export const fetchCars = async (
  make: string,
  model: string,
  year: string,
  page: string = "1"
): Promise<CarResponse> => {
  let url = `${import.meta.env.VITE_API_URL}/records/?`;

  if (make) url += `refine=make:"${make}"&`;
  if (model) url += `refine=model:"${model}"&`;
  if (year) url += `refine=year:"${year}"&`;
  if (page) {
    const calc = 10 * Number(page) - 10;
    url += `limit=10&offset=${calc}`;
  }

  // page : 1     2.  3.  4.  5
  // limit : sayfa basina gosterilecek eleman sayisi
  // offset :

  const res = await fetch(url);
  const data = await res.json();

  return data;
};
