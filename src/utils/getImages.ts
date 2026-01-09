import type { Car } from "../types";

export const getImage = (
  car: Car,
  angle?: string,
  surrounding?: boolean
): string => {
  // ^ Bir URL ornegi aldik ve url e kendimiz eklemeler yaptik
  const url = new URL("https://cdn.imagin.studio/getImage");
  url.searchParams.append("customer", import.meta.env.VITE_API_USER);
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("modelYear", car.year.toString());
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("randomPaint", "true");

  if (angle) url.searchParams.append("angle", angle);

  if (surrounding) {
    url.searchParams.append("surrounding", "sur2");
    url.searchParams.append("viewPoint", "3");
    url.searchParams.append("aspectRatio", "16:10");
    url.searchParams.append("overlayArea", "none");
  }
  return url.toString();
};
