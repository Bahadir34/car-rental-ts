import React, { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../service";
import type { Car } from "../../types";
import Card from "./card";
import Warning from "./warning";
import Loader from "../loader";

const List: FC = () => {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetchCars()
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

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
      <section className="home-cars-wrapper">
        {cars.map((car) => (
          <Card car={car} key={car.id} />
        ))}
      </section>
    </div>
  );
};

export default List;
