import { useEffect, useRef, useState, type FC } from "react";
import { fetchCars } from "../../service";
import type { Car } from "../../types";
import Card from "./card";
import Warning from "./warning";
import Loader from "../loader";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const List: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[] | null>(null);
  const [totalCar, setTotalCar] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const make = searchParams.get("make") || "";
  const model = searchParams.get("model") || "";
  const year = searchParams.get("year") || "";
  const page = searchParams.get("page") || "1";

  // ^ list komponenti render olunca calisir
  useEffect(() => {
    setLoading(true);

    // ^ arac verilerini al
    fetchCars(make, model, year, page)
      .then((data) => {
        setCars(data.results);
        setTotalCar(data.total_count);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [make, model, year, page]);

  if (loading)
    return (
      <Warning>
        <Loader />
      </Warning>
    );

  if (error) return <Warning>Error</Warning>;

  if (!cars || cars.length < 1) return <Warning>No cars data</Warning>;

  return (
    <div className="padding-x max-width">
      <div ref={scrollingDiv} className="w-0 h-0"></div>
      <section className="home-cars-wrapper">
        {cars.map((car) => (
          <Card car={car} key={car.id} />
        ))}
      </section>
      {totalCar && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => {
            if (scrollingDiv.current && page !== "1") {
              scrollingDiv.current.scrollIntoView();
            }
            searchParams.set("page", String(e.selected + 1));
            setSearchParams(searchParams);
          }}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(totalCar / 10)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
          initialPage={Number(page) - 1}
        />
      )}
    </div>
  );
};

export default List;
